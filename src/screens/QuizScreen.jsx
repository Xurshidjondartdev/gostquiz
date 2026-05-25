import { useMemo, useState } from 'react';
import Modal from '../components/Modal.jsx';
import { buildSession } from '../lib/quiz.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function QuizScreen({ subject, sessionOptions, onFinish, onExit }) {
  const questions = useMemo(
    () => buildSession(subject, sessionOptions),
    [subject, sessionOptions],
  );
  const total = questions.length;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(() => questions.map(() => null));
  const [confirmExit, setConfirmExit] = useState(false);

  const current = questions[idx];
  const answer = answers[idx];
  const revealed = !!(answer && answer.revealed);
  const selected = answer ? answer.selected : null;
  const isLast = idx === total - 1;
  const answeredCount = answers.filter(Boolean).length;
  const correctCount = answers.reduce(
    (acc, a, i) => acc + (a && a.selected === questions[i].correctAnswer ? 1 : 0),
    0,
  );

  function selectOption(i) {
    if (revealed) return;
    const isCorrect = i === current.correctAnswer;
    setAnswers((prev) => {
      const next = prev.slice();
      next[idx] = { selected: i, revealed: true, correct: isCorrect };
      return next;
    });
  }

  function goNext() {
    if (idx < total - 1) setIdx(idx + 1);
  }
  function goPrev() {
    if (idx > 0) setIdx(idx - 1);
  }
  function finish() {
    onFinish({
      correctCount,
      totalQuestions: total,
      wrongCount: total - correctCount,
      scorePercent: Math.round((correctCount / total) * 100),
      answers,
      questions,
    });
  }

  const progressPct = (answeredCount / total) * 100;

  return (
    <div className="container fade-up" key={idx}>
      <div className="quiz-head">
        <div>
          <div className="quiz-subject">{subject.name}</div>
          <div className="quiz-counter">
            Savol <strong>{idx + 1}</strong> / {total}
          </div>
        </div>
        <button
          className="iconbtn"
          type="button"
          onClick={() => setConfirmExit(true)}
          aria-label="Testdan chiqish"
        >
          ✕ <span>Chiqish</span>
        </button>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={Math.round(progressPct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-fill" style={{ width: progressPct + '%' }} />
      </div>

      <h2 className="question">{current.question}</h2>

      <div className="options">
        {current.options.map((opt, i) => {
          const letter = LETTERS[i] ?? String(i + 1);
          let cls = 'option';
          let mark = null;
          if (revealed) {
            const isCorrect = i === current.correctAnswer;
            const isPicked = i === selected;
            if (isCorrect) {
              cls += ' is-correct';
              mark = '✓';
            } else if (isPicked) {
              cls += ' is-wrong';
              mark = '✕';
            } else {
              cls += ' is-dim';
            }
          } else if (selected === i) {
            cls += ' is-selected';
          }
          return (
            <button
              key={i}
              type="button"
              className={cls}
              onClick={() => selectOption(i)}
              disabled={revealed}
              aria-pressed={selected === i}
            >
              <span className="option-letter">{letter}</span>
              <span className="option-text">{opt}</span>
              {mark && <span className="option-mark">{mark}</span>}
            </button>
          );
        })}
      </div>

      {revealed && current.explanation && (
        <div className="explain">
          <span className="explain-label">Izoh</span>
          {current.explanation}
        </div>
      )}

      <div className="quiz-foot">
        <button className="btn btn-ghost" onClick={goPrev} disabled={idx === 0}>
          ← Oldingi
        </button>
        <div className="btn-row">
          {isLast ? (
            <button
              className="btn btn-primary"
              onClick={finish}
              disabled={answeredCount < total}
              title={answeredCount < total ? 'Avval barcha savollarga javob bering' : ''}
            >
              Yakunlash ({correctCount}/{total})
            </button>
          ) : (
            <button className="btn btn-primary" onClick={goNext} disabled={!revealed}>
              Keyingi →
            </button>
          )}
        </div>
      </div>

      <Modal
        open={confirmExit}
        onClose={() => setConfirmExit(false)}
        title="Testdan chiqasizmi?"
        footer={
          <>
            <button className="btn btn-ghost" onClick={() => setConfirmExit(false)}>
              Davom etish
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setConfirmExit(false);
                onExit();
              }}
            >
              Ha, chiqish
            </button>
          </>
        }
      >
        <p>Joriy javoblaringiz saqlanmaydi.</p>
      </Modal>
    </div>
  );
}
