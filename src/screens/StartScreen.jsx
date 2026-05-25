import { useState } from 'react';
import Modal from '../components/Modal.jsx';
import { formatDate, scoreColor } from '../lib/quiz.js';

export default function StartScreen({ initialName, history, onStart, onResetData }) {
  const [name, setName] = useState(initialName ?? '');
  const [error, setError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  const recent = history.slice(0, 4);

  function submit(e) {
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
    onStart(trimmed);
  }

  return (
    <div className="container fade-up">
      <div className="hero">
        <div className="eyebrow">Quiz / O'zbek tilida</div>
        <h1 className="h1">5 fan. 10 ta savol. Bir necha daqiqa.</h1>
        <p className="lede">
          Ismingizni yozing va testni boshlang. Natijalar shu qurilmada saqlanadi — internet shart
          emas.
        </p>
      </div>

      <form className="card" onSubmit={submit} noValidate>
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
          Boshlash
          <span aria-hidden style={{ fontSize: 18, lineHeight: 1 }}>
            →
          </span>
        </button>
      </form>

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
                  <span className="recent-item-subj">{r.subjectName}</span>
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
