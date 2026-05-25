import { useEffect, useState } from 'react';
import Modal from './Modal.jsx';
import { isPremiumPhone } from '../data/allowedPhones.js';
import { formatLive, isValidPhone, normalizePhone } from '../lib/phone.js';

const ADMIN_CONTACT = '+998 90 000 00 00'; // bu yerni o'z aloqa raqamingiz bilan almashtiring

export default function PremiumModal({ open, featureName, onClose, onActivate }) {
  const [phoneInput, setPhoneInput] = useState('+998 ');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!open) {
      setPhoneInput('+998 ');
      setError('');
      setSuccess('');
    }
  }, [open]);

  function check() {
    const normalized = normalizePhone(phoneInput);
    if (!isValidPhone(normalized)) {
      setError("To'g'ri telefon raqami kiriting: +998 XX XXX XX XX");
      return;
    }
    if (!isPremiumPhone(normalized)) {
      setError("Bu raqam premium ro'yxatida yo'q. Sotib olish uchun pastdagi aloqa orqali murojaat qiling.");
      return;
    }
    setError('');
    setSuccess('Premium faollashtirildi ✓');
    setTimeout(() => {
      onActivate(normalized);
    }, 600);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Premium kerak"
      footer={
        success ? null : (
          <>
            <button className="btn btn-ghost" onClick={onClose}>
              Bekor qilish
            </button>
            <button className="btn btn-primary" onClick={check}>
              Tekshirish
            </button>
          </>
        )
      }
    >
      <div className="premium-modal">
        <p style={{ marginBottom: 12 }}>
          <strong>{featureName}</strong> — bu rejim faqat <strong>premium foydalanuvchilar</strong>{' '}
          uchun.
        </p>
        <p style={{ marginBottom: 16, color: 'var(--ink-3)', fontSize: 13 }}>
          Premium sotib olganingizdan keyin telefon raqamingizni kiriting — sayt avtomatik
          faollashtiradi.
        </p>

        {success ? (
          <div
            className="premium-success"
            style={{
              padding: '14px 16px',
              background: 'var(--success-soft)',
              color: 'var(--success)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--success)',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {success}
          </div>
        ) : (
          <>
            <div className="field">
              <label className="label" htmlFor="premium-phone">
                Telefon raqamingiz
              </label>
              <input
                id="premium-phone"
                type="tel"
                inputMode="tel"
                className={'input' + (error ? ' has-error' : '')}
                placeholder="+998 90 123 45 67"
                value={phoneInput}
                onChange={(e) => {
                  setPhoneInput(formatLive(e.target.value));
                  if (error) setError('');
                }}
                autoFocus
                maxLength={20}
              />
              {error && <p className="error-text">{error}</p>}
            </div>

            <div
              style={{
                marginTop: 16,
                padding: '12px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 13,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginBottom: 4,
                }}
              >
                Sotib olish
              </div>
              <div style={{ color: 'var(--ink-2)' }}>
                Aloqa: <strong style={{ color: 'var(--ink)' }}>{ADMIN_CONTACT}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
