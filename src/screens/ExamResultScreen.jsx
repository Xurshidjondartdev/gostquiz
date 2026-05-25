import { useState } from 'react';
import { formatClock, scoreColor, verdict } from '../lib/quiz.js';

export default function ExamResultScreen({ studentName, result, onRetry, onHome }) {
  const { correctCount, totalQuestions, scorePercent, sections, durationSec, answers, questions } =
    result;
  const [showReview, setShowReview] = useState(false);

  async function share() {
    const text = `${studentName} — Sinov imtihoni: ${correctCount}/${totalQuestions} (${scorePercent}%)`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Sinov imtihoni natijasi', text });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text + '\n' + location.href);
        window.alert('Natija nusxalandi');
      }
    } catch {
      /* user cancelled */
    }
  }

  return (
    <div className="container fade-up">
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="result-hero">
          <div className="eyebrow">Sinov imtihoni · {studentName}</div>
          <p className="score-big">
            <span className="score-num">{correctCount}</span>
            <span className="score-denom">/{totalQuestions}</span>
          </p>
          <p className="score-label">
            {verdict(scorePercent)} ·{' '}
            <strong style={{ color: 'var(--ink)' }}>{scorePercent}%</strong> · {formatClock(durationSec)}
          </p>
        </div>

        <div className="result-stats">
          <div className="stat">
            <div className="stat-num success">{correctCount}</div>
            <div className="stat-label">To'g'ri</div>
          </div>
          <div className="stat">
            <div className="stat-num danger">{totalQuestions - correctCount}</div>
            <div className="stat-label">Noto'g'ri</div>
          </div>
          <div className="stat">
            <div className="stat-num">{formatClock(durationSec)}</div>
            <div className="stat-label">Vaqt</div>
          </div>
        </div>

        <div style={{ padding: '0 24px 8px' }}>
          <h3 className="recent-title" style={{ marginBottom: 12 }}>
            Fan bo'yicha natija
          </h3>
          <div className="recent-list">
            {sections.map((sec) => (
              <div className="recent-item" key={sec.subjectId}>
                <div className="recent-item-left">
                  <span className="recent-item-subj">{sec.subjectName}</span>
                  <span className="recent-item-meta">
                    {sec.correct}/{sec.total} ta to'g'ri
                  </span>
                </div>
                <span className={'score-pill ' + scoreColor(sec.scorePercent)}>
                  {sec.scorePercent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '20px 24px 24px' }}>
          <div className="btn-row" style={{ marginBottom: 12 }}>
            <button className="btn btn-primary" onClick={onRetry} style={{ flex: 1 }}>
              Qayta urinish
            </button>
            <button className="btn btn-ghost" onClick={onHome} style={{ flex: 1 }}>
              Bosh sahifa
            </button>
          </div>
          <div className="btn-row">
            <button
              className="btn btn-ghost"
              onClick={() => setShowReview((v) => !v)}
              style={{ flex: 1 }}
            >
              {showReview ? 'Yashirish' : "Javoblarni ko'rish"}
            </button>
            <button className="btn btn-ghost" onClick={share} style={{ flex: 1 }}>
              Ulashish
            </button>
          </div>
        </div>
      </div>

      {showReview && (
        <div className="review-list fade-up">
          {questions.map((q, i) => {
            const a = answers[i];
            const ok = a && a.selected === q.correctAnswer;
            return (
              <div className="review-item" key={i}>
                <span className={'review-dot ' + (ok ? 'ok' : 'no')} aria-hidden />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p className="review-q">
                    <span className="review-num">{i + 1}. </span>
                    {q.question}
                  </p>
                  <p className="review-a">
                    {a ? (
                      ok ? (
                        <span className="ok">✓ {q.options[a.selected]}</span>
                      ) : (
                        <>
                          <span className="no">{q.options[a.selected]}</span>
                          {" · To'g'ri: "}
                          <span className="ok">{q.options[q.correctAnswer]}</span>
                        </>
                      )
                    ) : (
                      <em>Javob berilmagan · To'g'ri: {q.options[q.correctAnswer]}</em>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
