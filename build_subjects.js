import fs from 'node:fs';
import path from 'node:path';
import xlsx from 'xlsx';

const DOCS = path.resolve('docs');

const SUBJECT_CONFIG = [
  {
    file: "DAK umumiy pedagogika(o'zbek).xlsx",
    sheet: 'Umumiy pedagogika_UZ',
    id: 'pedagogika',
    name: 'Umumiy pedagogika',
    tagline: "Ta'lim, didaktika, tarbiya nazariyasi",
    glyph: 'P',
  },
  {
    file: 'Jahon tarixi.xlsx',
    sheet: 'Jahon tarixi',
    id: 'jahon',
    name: 'Jahon tarixi',
    tagline: 'Yangi va eng yangi davr',
    glyph: 'W',
  },
  {
    file: "O'zbekiston tarixi.xlsx",
    sheet: 'Лист1',
    id: 'ozbekiston',
    name: "O'zbekiston tarixi",
    tagline: 'Qadimgi davrdan bugungacha',
    glyph: '⌘',
  },
  {
    file: "Tarix o‘qitish metodikasi Tarix (2).xlsx",
    sheet: "Tarix o'qitish metodikasi",
    id: 'metodika',
    name: "Tarix o‘qitish metodikasi",
    tagline: "Pedagogik texnologiyalar, metodlar",
    glyph: 'M',
  },
  {
    file: "Umumiy_psixologiya_Yosh_davrlari_va_pedagogik_psixologiyao'zbek.xlsx",
    sheet: 'Лист1',
    id: 'psixologiya',
    name: 'Pedagogik psixologiya',
    tagline: "Yosh davrlari, ta'lim psixologiyasi",
    glyph: 'ψ',
  },
];

function clean(s) {
  if (s == null) return '';
  return String(s)
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function rowsFromSheet(filePath, sheetName) {
  const wb = xlsx.readFile(filePath);
  const sheet = wb.Sheets[sheetName] ?? wb.Sheets[wb.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });
}

function isHeaderRow(row) {
  const c0 = String(row[0] ?? '').toLowerCase();
  return (
    c0.includes('savol') ||
    c0 === '№' ||
    c0 === 't/r' ||
    c0.includes('t/r')
  );
}

function extractQuestions(filePath, sheetName) {
  const rows = rowsFromSheet(filePath, sheetName);
  const out = [];
  const seen = new Set();
  let skippedDupes = 0;
  for (const row of rows) {
    if (!row || row.length < 6) continue;
    if (isHeaderRow(row)) continue;

    const question = clean(row[1]);
    const correct = clean(row[2]);
    const wrong1 = clean(row[3]);
    const wrong2 = clean(row[4]);
    const wrong3 = clean(row[5]);

    if (!question || question.length < 5) continue;
    if (!correct || !wrong1 || !wrong2 || !wrong3) continue;

    const allOpts = [correct, wrong1, wrong2, wrong3];
    if (new Set(allOpts.map((s) => s.toLowerCase())).size !== 4) continue;
    if (allOpts.some((s) => s.length > 400)) continue;
    if (question.length > 600) continue;

    const dedupKey = question.trim().toLowerCase();
    if (seen.has(dedupKey)) {
      skippedDupes++;
      continue;
    }
    seen.add(dedupKey);

    out.push({
      question,
      options: allOpts,
      correctAnswer: 0,
    });
  }
  if (skippedDupes > 0) {
    console.log(`  (${skippedDupes} ta takror savol o'tkazib yuborildi)`);
  }
  return out;
}

const subjects = [];
for (const cfg of SUBJECT_CONFIG) {
  const filePath = path.join(DOCS, cfg.file);
  if (!fs.existsSync(filePath)) {
    console.warn('SKIP — missing file:', cfg.file);
    continue;
  }
  const questions = extractQuestions(filePath, cfg.sheet);
  console.log(cfg.name, '→', questions.length, 'ta savol');
  subjects.push({
    id: cfg.id,
    name: cfg.name,
    tagline: cfg.tagline,
    glyph: cfg.glyph,
    questions,
  });
}

const output =
  '// Avtomatik tarzda docs/ ichidagi Excel fayllardan generatsiya qilingan.\n' +
  '// Manba fayllari: ' +
  SUBJECT_CONFIG.map((c) => c.file).join(', ') +
  '\n// Har bir savolda options[0] — to‘g‘ri javob. Sessiya davomida aralashtiriladi.\n\n' +
  'export const SUBJECTS = ' +
  JSON.stringify(subjects, null, 2) +
  ';\n\nexport function findSubject(id) {\n  return SUBJECTS.find((s) => s.id === id) ?? null;\n}\n';

fs.writeFileSync('src/data/subjects/index.js', output);
console.log('\nWritten src/data/subjects/index.js');
console.log('Total subjects:', subjects.length);
console.log('Total questions:', subjects.reduce((a, s) => a + s.questions.length, 0));
