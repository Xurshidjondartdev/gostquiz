// ============================================================================
// RUXSAT ETILGAN TELEFON RAQAMLARI RO'YXATI
// ============================================================================
// Faqat shu yerdagi raqamlar saytga kira oladi.
//
// YANGI RAQAM QO'SHISH:
//   pastdagi RAW massiviga raqam qo'shing. Ko'rinishi muhim emas:
//     '+998 90 123 45 67'
//     '+998901234567'
//     '998901234567'
//     '901234567'
//   — barchasi avtomatik tarzda +998XXXXXXXXX shakliga keltiriladi.
//
// RAQAMNI O'CHIRISH:
//   ro'yxatdan satr o'chiring yoki boshiga // qo'shib komment qiling.
//
// XAVFSIZLIK ESLATMASI:
//   Bu ro'yxat brauzer ichida ko'rinadi (frontend himoya). Texnik bilimi bor
//   foydalanuvchi DevTools orqali ko'rishi mumkin. Kollej/maktab ichida etarli,
//   lekin haqiqiy maxfiy ma'lumot uchun emas.
// ============================================================================

import { normalizePhone } from '../lib/phone.js';

const RAW = [
  '+998 93 946 84 30',
  '+998 77 076 84 30',
];

export const ALLOWED_PHONES = new Set(RAW.map(normalizePhone));

export function isAllowed(normalized) {
  return ALLOWED_PHONES.has(normalized);
}
