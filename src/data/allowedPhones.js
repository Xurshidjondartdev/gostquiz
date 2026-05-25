// ============================================================================
// PREMIUM FOYDALANUVCHILAR RO'YXATI
// ============================================================================
// Saytda BEPUL: faqat «Umumiy» rejimi (5 fandan aralash random savollar).
// PREMIUM: «Sinov imtihoni» va «Fan bo'yicha mashq» rejimlari.
//
// Foydalanuvchi premium faollashtirish uchun telefon raqamini kiritadi.
// Agar raqam pastdagi ro'yxatda bo'lsa — premium yoqiladi.
//
// YANGI PREMIUM USER QO'SHISH:
//   pastdagi RAW massiviga raqam qo'shing. Ko'rinishi muhim emas:
//     '+998 90 123 45 67'
//     '+998901234567'
//     '998901234567'
//     '901234567'
//   — barchasi avtomatik tarzda +998XXXXXXXXX shakliga keltiriladi.
//
// PREMIUM O'CHIRISH:
//   ro'yxatdan satr o'chiring yoki boshiga // qo'shib komment qiling.
//   Foydalanuvchining qurilmasida saqlangan premium status keyingi sayt
//   ochilganda avtomatik bekor qilinadi.
//
// XAVFSIZLIK ESLATMASI:
//   Bu ro'yxat brauzer ichida ko'rinadi (frontend himoya). Texnik bilimi bor
//   foydalanuvchi DevTools orqali ko'rishi mumkin. Maktab/o'quv markazi
//   ichida etarli, lekin to'lov tizimi uchun mustaqil emas.
// ============================================================================

import { normalizePhone } from '../lib/phone.js';

const RAW = [
  '+998 93 946 84 30',
  '+998 77 076 84 30',
  // bu yerga premium sotib olgan foydalanuvchilar raqamini qo'shing
];

export const PREMIUM_PHONES = new Set(RAW.map(normalizePhone));

export function isPremiumPhone(normalized) {
  return PREMIUM_PHONES.has(normalized);
}

// Eski API saqlash (boshqa joyda ishlatilgan bo'lishi mumkin)
export const ALLOWED_PHONES = PREMIUM_PHONES;
export const isAllowed = isPremiumPhone;
