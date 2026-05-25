import { useState } from 'react';
import { scoreColor, verdict } from '../lib/quiz.js';

export default function ResultScreen({ studentName, subject, result, onRetry, onHome }) {
  const { correctCount, wrongCount, totalQuestions, scorePercent, answers, questions } = result;
  const [showReview, setShowReview] = useState(false);

  async function share() {
    const text = `${studentName} — ${subject.name}: ${correctCount}/${totalQuestions} (${scorePercent}%) ✓`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Quiz natija', text });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text + '\n' + location.href);
        window.alert('Natija va havola nusxalandi');
      }
    } catch {
      /* user cancelled */
    }
  }

  const cls = scoreColor(scorePercent);

  return (
    <div className="container fade-up">
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="result-hero">
          <div className="eyebrow">
            {subject.name} · {studentName}
          </div>
          <p className="score-big">
            <span className="score-num">{correctCount}</span>
            <span className="score-denom">/{totalQuestions}</span>
          </p>
          <p className="score-label">
            {verdict(scorePercent)} ·{' '}
            <strong style={{ color: 'var(--ink)' }}>{scorePercent}%</strong>
          </p>
        </div>

        <div className="result-stats">
          <div className="stat">
            <div className="stat-num success">{correctCount}</div>
            <div className="stat-label">To'g'ri</div>
          </div>
          <div className="stat">
            <div className="stat-num danger">{wrongCount}</div>
            <div className="stat-label">Noto'g'ri</div>
          </div>
          <div className="stat">
            <div className={'stat-num ' + cls}>{scorePercent}%</div>
            <div className="stat-label">Foiz</div>
          </div>
        </div>

        <div style={{ padding: '0 24px 24px' }}>
          <div className="btn-row" style={{ marginBottom: 12 }}>
            <button className="btn btn-primary" onClick={onRetry} style={{ flex: 1 }}>
              Qayta ishlash
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
                      <em>Javob berilmagan</em>
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
