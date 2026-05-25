function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildSession(subject, opts = { shuffleQuestions: true, shuffleOptions: true }) {
  const baseQs = opts.shuffleQuestions ? shuffle(subject.questions) : subject.questions;
  return baseQs.map((q) => {
    if (!opts.shuffleOptions) {
      return { ...q, options: q.options.slice(), correctAnswer: q.correctAnswer };
    }
    const idx = q.options.map((_, i) => i);
    const sIdx = shuffle(idx);
    return {
      ...q,
      options: sIdx.map((i) => q.options[i]),
      correctAnswer: sIdx.indexOf(q.correctAnswer),
    };
  });
}

export function formatDate(ts) {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
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
