import { useCallback, useRef, useState } from 'react';
import Modal from '../components/Modal.jsx';
import { pickRandomQuestion } from '../lib/quiz.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const RECENT_WINDOW = 30;

export default function EndlessQuizScreen({
  subject,
  onExit,
  showSubjectTag = false,
  requirePremium = false,
  isPremium = false,
  onRequestPremium,
}) {
  const seenRef = useRef([]);
  const [current, setCurrent] = useState(() => pickRandomQuestion(subject, new Set()));
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [stats, setStats] = useState({ total: 0, correct: 0, wrong: 0 });
  const [confirmExit, setConfirmExit] = useState(false);

  function selectOption(i) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    const isCorrect = i === current.correctAnswer;
    setStats((s) => ({
      total: s.total + 1,
      correct: s.correct + (isCorrect ? 1 : 0),
      wrong: s.wrong + (isCorrect ? 0 : 1),
    }));
  }

  const next = useCallback(() => {
    if (requirePremium && !isPremium) {
      onRequestPremium && onRequestPremium(`${subject.name} — Barcha testlar`);
      return;
    }
    seenRef.current.push(current.question);
    if (seenRef.current.length > RECENT_WINDOW) seenRef.current.shift();
    const exclude = new Set(seenRef.current);
    setCurrent(pickRandomQuestion(subject, exclude));
    setSelected(null);
    setRevealed(false);
  }, [current, subject, requirePremium, isPremium, onRequestPremium]);

  const accuracy = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);

  return (
    <div className="container fade-up">
      <div className="quiz-head">
        <div>
          <div className="quiz-subject">{subject.name} · Barcha testlar</div>
          <div className="quiz-counter">
            <strong>{stats.total}</strong> savol · {accuracy}% to'g'ri
          </div>
        </div>
        <button
          className="iconbtn"
          type="button"
          onClick={() => setConfirmExit(true)}
          aria-label="Chiqish"
        >
          ✕ <span>Chiqish</span>
        </button>
      </div>

      <div className="endless-stats">
        <div className="endless-stat">
          <div className="endless-stat-num">{stats.correct}</div>
          <div className="endless-stat-label success">To'g'ri</div>
        </div>
        <div className="endless-stat">
          <div className="endless-stat-num">{stats.wrong}</div>
          <div className="endless-stat-label danger">Noto'g'ri</div>
        </div>
        <div className="endless-stat">
          <div className="endless-stat-num">{accuracy}%</div>
          <div className="endless-stat-label">Aniqlik</div>
        </div>
      </div>

      {showSubjectTag && current.subjectName && (
        <div className="subject-tag-row">
          <span className="subject-tag-chip">{current.subjectName}</span>
        </div>
      )}
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

      {revealed && current.explanation && (
        <div className="explain">
          <span className="explain-label">Izoh</span>
          {current.explanation}
        </div>
      )}

      <div className="quiz-foot">
        <button className="btn btn-ghost" onClick={() => setConfirmExit(true)}>
          Chiqish
        </button>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={next} disabled={!revealed}>
            Keyingi savol →
          </button>
        </div>
      </div>

      <Modal
        open={confirmExit}
        onClose={() => setConfirmExit(false)}
        title="Mashqni yakunlaysizmi?"
        footer={
          <>
            <button className="btn btn-ghost" onClick={() => setConfirmExit(false)}>
              Davom etish
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setConfirmExit(false);
                onExit(stats);
              }}
            >
              Ha, chiqish
            </button>
          </>
        }
      >
        <p>
          Hozirgacha {stats.total} savol javoblandi, {stats.correct} ta to'g'ri.
        </p>
      </Modal>
    </div>
  );
}
