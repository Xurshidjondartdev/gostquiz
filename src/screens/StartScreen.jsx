import { useState } from 'react';
import ExamCta from '../components/ExamCta.jsx';
import Modal from '../components/Modal.jsx';
import { formatDate, scoreColor } from '../lib/quiz.js';

export default function StartScreen({
  initialName,
  history,
  onStartName,
  onPickExam,
  onPickSubjects,
  onResetData,
}) {
  const [name, setName] = useState(initialName ?? '');
  const [error, setError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  const [confirmExam, setConfirmExam] = useState(false);

  const hasName = !!(initialName && initialName.trim());
  const recent = history.slice(0, 4);

  function submitName(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError('Ismingizni kiriting');
      return;
    }
    if (trimmed.length < 2) {
      setError("Ism kamida 2 ta belgi bo'lishi kerak");
      return;
    }
    onStartName(trimmed);
  }

  function handlePickExam() {
    if (!hasName) {
      setError("Avval ismingizni kiriting va saqlang");
      return;
    }
    setConfirmExam(true);
  }

  function handlePickSubjects() {
    if (!hasName) {
      setError("Avval ismingizni kiriting va saqlang");
      return;
    }
    onPickSubjects();
  }

  return (
    <div className="container fade-up">
      <div className="hero">
        <div className="eyebrow">Quiz / O'zbek tilida</div>
        <h1 className="h1">
          {hasName ? `Salom, ${initialName}` : '5 fan. 1001+ savol. O‘zingizni sinab ko‘ring.'}
        </h1>
        <p className="lede">
          {hasName
            ? "Sinov imtihoniga tushing yoki fan bo'yicha mashq qiling. Barcha natijalar shu qurilmada saqlanadi."
            : 'Ismingizni yozing va boshlang. Natijalar shu qurilmada saqlanadi — internet shart emas.'}
        </p>
      </div>

      {!hasName && (
        <form className="card" onSubmit={submitName} noValidate>
          <div className="field">
            <label className="label" htmlFor="name-input">
              Ismingiz
            </label>
            <input
              id="name-input"
              className={'input' + (error ? ' has-error' : '')}
              type="text"
              placeholder="Masalan, Asadbek"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              autoComplete="given-name"
              maxLength={40}
              autoFocus
            />
            {error && <p className="error-text">{error}</p>}
          </div>
          <div style={{ height: 16 }} />
          <button type="submit" className="btn btn-primary btn-block">
            Saqlash va davom etish
            <span aria-hidden style={{ fontSize: 18, lineHeight: 1 }}>
              →
            </span>
          </button>
        </form>
      )}

      {hasName && (
        <>
          <ExamCta onStart={handlePickExam} />

          <button type="button" className="big-secondary" onClick={handlePickSubjects}>
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
                setConfirmReset(false);
              }}
            >
              O'chirish
            </button>
          </>
        }
      >
        <p>
          Bu amal sizning ismingiz va barcha natijalar tarixini shu qurilmadan o'chiradi. Buni
          bekor qilib bo'lmaydi.
        </p>
      </Modal>
    </div>
  );
}
