import { useCallback, useMemo, useRef, useState } from 'react';
import Modal from '../components/Modal.jsx';
import Timer from '../components/Timer.jsx';
import { buildTimedSession } from '../lib/quiz.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const PER_QUESTION_SEC = 30;
const QUESTION_COUNT = 20;

export default function TimedQuizScreen({ subject, isPremium, onRequestPremium, onFinish, onExit }) {
  const questions = useMemo(() => buildTimedSession(subject, QUESTION_COUNT), [subject]);
  const total = questions.length;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(() => questions.map(() => null));
  const [confirmExit, setConfirmExit] = useState(false);
  const finishedRef = useRef(false);

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

  const finish = useCallback(
    (latest) => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      const finalAnswers = latest || answers;
      const correct = finalAnswers.reduce(
        (acc, a, i) => acc + (a && a.selected === questions[i].correctAnswer ? 1 : 0),
        0,
      );
      onFinish({
        correctCount: correct,
        totalQuestions: total,
        wrongCount: total - correct,
        scorePercent: Math.round((correct / total) * 100),
        answers: finalAnswers,
        questions,
        mode: 'timed',
      });
    },
    [answers, onFinish, questions, total],
  );

  function selectOption(i) {
    if (revealed) return;
    const isCorrect = i === current.correctAnswer;
    setAnswers((prev) => {
      const next = prev.slice();
      next[idx] = { selected: i, revealed: true, correct: isCorrect, timedOut: false };
      return next;
    });
  }

  function handleTimeout() {
    if (revealed) return;
    setAnswers((prev) => {
      if (prev[idx]) return prev;
      const next = prev.slice();
      next[idx] = { selected: null, revealed: true, correct: false, timedOut: true };
      if (idx === total - 1) {
        setTimeout(() => finish(next), 800);
      } else {
        setTimeout(() => setIdx((i) => i + 1), 800);
      }
      return next;
    });
  }

  function goNext() {
    if (!isPremium) {
      onRequestPremium && onRequestPremium(`${subject.name} — Vaqtli rejim`);
      return;
    }
    if (idx < total - 1) setIdx(idx + 1);
  }
  function goPrev() {
    if (idx > 0) setIdx(idx - 1);
  }

  return (
    <div className="container fade-up">
      <div className="quiz-head">
        <div>
          <div className="quiz-subject">{subject.name} · Vaqtli</div>
          <div className="quiz-counter">
            Savol <strong>{idx + 1}</strong> / {total}
          </div>
        </div>
        <div className="quiz-head-right">
          <Timer
            seconds={PER_QUESTION_SEC}
            resetKey={idx}
            paused={revealed}
            urgentAt={10}
            onExpire={handleTimeout}
          />
          <button
            className="iconbtn"
            type="button"
            onClick={() => setConfirmExit(true)}
            aria-label="Testdan chiqish"
          >
            ✕ <span>Chiqish</span>
          </button>
        </div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={Math.round(((idx + 1) / total) * 100)}
      >
        <div className="progress-fill" style={{ width: ((idx + 1) / total) * 100 + '%' }} />
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
            >
              <span className="option-letter">{letter}</span>
              <span className="option-text">{opt}</span>
              {mark && <span className="option-mark">{mark}</span>}
            </button>
          );
        })}
      </div>

      {revealed && answer?.timedOut && (
        <div
          className="explain"
          style={{
            background: 'var(--danger-soft)',
            borderColor: 'var(--danger)',
            color: 'var(--danger)',
          }}
        >
          <span className="explain-label" style={{ color: 'var(--danger)' }}>
            Vaqt tugadi
          </span>
          To'g'ri javob: <strong>{current.options[current.correctAnswer]}</strong>
        </div>
      )}

      {revealed && !answer?.timedOut && current.explanation && (
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
            <button className="btn btn-primary" onClick={() => finish()} disabled={!revealed}>
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
        <p>
          Joriy {answeredCount}/{total} javoblaringiz saqlanmaydi.
        </p>
      </Modal>
    </div>
  );
}
