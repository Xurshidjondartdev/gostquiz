function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQuestion(q) {
  const idx = q.options.map((_, i) => i);
  const sIdx = shuffle(idx);
  return {
    ...q,
    options: sIdx.map((i) => q.options[i]),
    correctAnswer: sIdx.indexOf(q.correctAnswer),
  };
}

export function buildTimedSession(subject, count = 20) {
  const limit = Math.min(count, subject.questions.length);
  return shuffle(subject.questions).slice(0, limit).map(shuffleQuestion);
}

export function pickRandomQuestion(subject, excludeIds = new Set()) {
  const pool = subject.questions.filter((q) => !excludeIds.has(q.question));
  const source = pool.length > 0 ? pool : subject.questions;
  const q = source[Math.floor(Math.random() * source.length)];
  return shuffleQuestion(q);
}

export function buildExam(subjects, perSubject = 10) {
  const questions = [];
  const sections = [];
  let cursor = 0;
  for (const s of subjects) {
    const limit = Math.min(perSubject, s.questions.length);
    const pool = shuffle(s.questions).slice(0, limit);
    const chunk = pool.map(shuffleQuestion).map((q) => ({ ...q, subjectId: s.id }));
    sections.push({
      subjectId: s.id,
      subjectName: s.name,
      from: cursor,
      to: cursor + chunk.length - 1,
      count: chunk.length,
    });
    cursor += chunk.length;
    questions.push(...chunk);
  }
  return { questions, sections };
}

export function formatDate(ts) {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function formatClock(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  if (h > 0) return `${h}:${pad(m)}:${pad(sec)}`;
  return `${pad(m)}:${pad(sec)}`;
}

export function scoreColor(pct) {
  if (pct >= 80) return 'success';
  if (pct >= 50) return '';
  return 'danger';
}

export function verdict(pct) {
  if (pct >= 80) return 'Ajoyib natija!';
  if (pct >= 60) return 'Yaxshi natija';
  if (pct >= 40) return "O‘rtacha — yana urinib ko‘ring";
  return 'Mashq qilish kerak';
}
