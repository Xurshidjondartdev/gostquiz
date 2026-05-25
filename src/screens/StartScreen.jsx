import { useState } from 'react';
import ExamCta from '../components/ExamCta.jsx';
import Modal from '../components/Modal.jsx';
import { isAllowed } from '../data/allowedPhones.js';
import { formatLive, isValidPhone, normalizePhone } from '../lib/phone.js';
import { formatDate, scoreColor } from '../lib/quiz.js';

export default function StartScreen({
  initialName,
  initialPhone,
  history,
  onStartUser,
  onPickExam,
  onPickSubjects,
  onPickUmumiy,
  onResetData,
}) {
  const [name, setName] = useState(initialName ?? '');
  const [phoneInput, setPhoneInput] = useState(() =>
    initialPhone ? formatLive(initialPhone) : '+998 ',
  );
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmExam, setConfirmExam] = useState(false);

  const hasUser = !!(initialName && initialPhone);
  const recent = history.slice(0, 4);

  function submit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    const normalized = normalizePhone(phoneInput);

    let ok = true;
    if (!trimmed) {
      setNameError('Ismingizni kiriting');
      ok = false;
    } else if (trimmed.length < 2) {
      setNameError("Ism kamida 2 ta belgi bo'lishi kerak");
      ok = false;
    } else {
      setNameError('');
    }

    if (!isValidPhone(normalized)) {
      setPhoneError("To'g'ri telefon raqami kiriting: +998 XX XXX XX XX");
      ok = false;
    } else if (!isAllowed(normalized)) {
      setPhoneError("Bu raqam ro'yxatda yo'q. Administratorga murojaat qiling.");
      ok = false;
    } else {
      setPhoneError('');
    }

    if (!ok) return;
    onStartUser(trimmed, normalized);
  }

  function handlePickExam() {
    if (!hasUser) return;
    setConfirmExam(true);
  }

  function handlePickSubjects() {
    if (!hasUser) return;
    onPickSubjects();
  }

  function handlePickUmumiy() {
    if (!hasUser) return;
    onPickUmumiy();
  }

  function handlePhoneChange(e) {
    const v = formatLive(e.target.value);
    setPhoneInput(v);
    if (phoneError) setPhoneError('');
  }

  return (
    <div className="container fade-up">
      <div className="hero">
        <div className="eyebrow">GOST savollari</div>
        <h1 className="h1">
          {hasUser ? `Salom, ${initialName}` : "5 fan. 986+ savol. O‘zingizni sinab ko‘ring."}
        </h1>
        <p className="lede">
          {hasUser
            ? "Sinov imtihoniga tushing yoki fan bo'yicha mashq qiling. Barcha natijalar shu qurilmada saqlanadi."
            : "Ismingiz va telefon raqamingizni kiriting. Faqat ruxsat etilgan raqamlar saytga kira oladi."}
        </p>
      </div>

      {!hasUser && (
        <form className="card" onSubmit={submit} noValidate>
          <div className="field">
            <label className="label" htmlFor="name-input">
              Ismingiz
            </label>
            <input
              id="name-input"
              className={'input' + (nameError ? ' has-error' : '')}
              type="text"
              placeholder="Masalan, Asadbek"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError('');
              }}
              autoComplete="given-name"
              maxLength={40}
              autoFocus
            />
            {nameError && <p className="error-text">{nameError}</p>}
          </div>

          <div style={{ height: 14 }} />

          <div className="field">
            <label className="label" htmlFor="phone-input">
              Telefon raqami
            </label>
            <input
              id="phone-input"
              className={'input' + (phoneError ? ' has-error' : '')}
              type="tel"
              inputMode="tel"
              placeholder="+998 90 123 45 67"
              value={phoneInput}
              onChange={handlePhoneChange}
              autoComplete="tel"
              maxLength={20}
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
          </div>

          <div style={{ height: 16 }} />
          <button type="submit" className="btn btn-primary btn-block">
            Tekshirib davom etish
            <span aria-hidden style={{ fontSize: 18, lineHeight: 1 }}>
              →
            </span>
          </button>

          <p
            className="lede"
            style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, textAlign: 'center' }}
          >
            Ma'lumotlar faqat shu qurilmada saqlanadi.
          </p>
        </form>
      )}

      {hasUser && (
        <>
          <ExamCta onStart={handlePickExam} />

          <button type="button" className="big-secondary" onClick={handlePickSubjects}>
            <div className="big-secondary-icon" aria-hidden>
              ≡
            </div>
            <div className="big-secondary-body">
              <div className="big-secondary-title">Fan bo'yicha mashq</div>
              <div className="big-secondary-tag">
                Vaqtli rejim (20 savol) yoki cheksiz «Barcha testlar» rejimi
              </div>
            </div>
            <span aria-hidden className="big-secondary-arrow">
              →
            </span>
          </button>

          <button type="button" className="big-secondary" onClick={handlePickUmumiy}>
            <div className="big-secondary-icon" aria-hidden>
              ⊕
            </div>
            <div className="big-secondary-body">
              <div className="big-secondary-title">Umumiy</div>
              <div className="big-secondary-tag">
                5 fandan barcha 986+ savol · aralash random · vaqt cheklovsiz
              </div>
            </div>
            <span aria-hidden className="big-secondary-arrow">
              →
            </span>
          </button>
        </>
      )}

      {recent.length > 0 && (
        <div className="recent">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <h3 className="recent-title" style={{ margin: 0 }}>
              Oxirgi natijalar
            </h3>
            <button className="iconbtn" type="button" onClick={() => setConfirmReset(true)}>
              Tozalash
            </button>
          </div>
          <div className="recent-list">
            {recent.map((r, i) => (
              <div className="recent-item" key={i}>
                <div className="recent-item-left">
                  <span className="recent-item-subj">
                    {r.type === 'exam' ? 'Sinov imtihoni' : r.subjectName}
                    {r.mode === 'timed' && ' · Vaqtli'}
                  </span>
                  <span className="recent-item-meta">
                    {r.studentName} · {formatDate(r.completedAt)}
                  </span>
                </div>
                <span className={'score-pill ' + scoreColor(r.scorePercent)}>
                  {r.correctCount}/{r.totalQuestions} · {r.scorePercent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Modal
        open={confirmExam}
        onClose={() => setConfirmExam(false)}
        title="Sinov imtihoni boshlanadi"
        footer={
          <>
            <button className="btn btn-ghost" onClick={() => setConfirmExam(false)}>
              Bekor qilish
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setConfirmExam(false);
                onPickExam();
              }}
            >
              Boshlash
            </button>
          </>
        }
      >
        <p>
          5 fan ketma-ket keladi, har fandan 10 ta savol — jami <strong>50 ta</strong>. Vaqt:{' '}
          <strong>1 soat</strong>. Vaqt tugasa avtomatik yakunlanadi.
        </p>
      </Modal>

      <Modal
        open={confirmReset}
        onClose={() => setConfirmReset(false)}
        title="Hammasini tozalash?"
        footer={
          <>
            <button className="btn btn-ghost" onClick={() => setConfirmReset(false)}>
              Bekor qilish
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onResetData();
                setName('');
                setPhoneInput('+998 ');
                setConfirmReset(false);
              }}
            >
              O'chirish
            </button>
          </>
        }
      >
        <p>
          Bu amal sizning ismingiz, telefon raqamingiz va barcha natijalar tarixini shu qurilmadan
          o'chiradi. Buni bekor qilib bo'lmaydi.
        </p>
      </Modal>
    </div>
  );
}
