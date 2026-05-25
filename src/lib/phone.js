// O'zbekiston telefon raqami yordamchi funksiyalari.
// Standart shakl: +998XXXXXXXXX (jami 13 belgi).

export function normalizePhone(input) {
  if (!input) return '';
  let digits = String(input).replace(/\D/g, '');
  // Yo'qotish: oldidagi 8 yoki 998 oldindagi 0 lar
  if (digits.length === 9) {
    return '+998' + digits;
  }
  if (digits.length === 12 && digits.startsWith('998')) {
    return '+' + digits;
  }
  if (digits.length === 13 && digits.startsWith('998')) {
    // edge: 13 digits no plus, starts with 998 (one extra)
    return '+' + digits.slice(0, 12);
  }
  return digits ? '+' + digits : '';
}

export function isValidPhone(normalized) {
  return /^\+998\d{9}$/.test(normalized);
}

export function formatPhone(normalized) {
  if (!isValidPhone(normalized)) return normalized;
  const d = normalized.slice(4); // 9 digits
  return `+998 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7, 9)}`;
}

// Foydalanuvchi yozayotganda jonli format: +998 90 123 45 67
export function formatLive(input) {
  const digits = String(input || '').replace(/\D/g, '');
  // hammasini +998 ga moslash
  let rest = digits;
  if (rest.startsWith('998')) rest = rest.slice(3);
  rest = rest.slice(0, 9);

  let out = '+998';
  if (rest.length > 0) out += ' ' + rest.slice(0, 2);
  if (rest.length > 2) out += ' ' + rest.slice(2, 5);
  if (rest.length > 5) out += ' ' + rest.slice(5, 7);
  if (rest.length > 7) out += ' ' + rest.slice(7, 9);
  return out;
}
