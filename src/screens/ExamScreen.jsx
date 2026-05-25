import { useCallback, useMemo, useRef, useState } from 'react';
import Modal from '../components/Modal.jsx';
import Timer from '../components/Timer.jsx';
import { buildExam } from '../lib/quiz.js';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const EXAM_DURATION_SEC = 60 * 60;
const PER_SUBJECT = 10;

export default function ExamScreen({ subjects, isPremium, onRequestPremium, onFinish, onExit }) {
  const exam = useMemo(() => buildExam(subjects, PER_SUBJECT), [subjects]);
  const { questions, sections } = exam;
  const total = questions.length;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(() => questions.map(() => null));
  const [confirmExit, setConfirmExit] = useState(false);
  const [confirmFinish, setConfirmFinish] = useState(false);
  const finishedRef = useRef(false);
  const startedAtRef = useRef(Date.now());

  const current = questions[idx];
  const answer = answers[idx];
  const revealed = !!(answer && answer.revealed);
  const selected = answer ? answer.selected : null;
  const isLast = idx === total - 1;
  const answeredCount = answers.filter(Boolean).length;
  const currentSection = sections.find((s) => idx >= s.from && idx <= s.to) ?? sections[0];
  const sectionIdx = sections.indexOf(currentSection);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const breakdown = sections.map((sec) => {
      let correct = 0;
      for (let i = sec.from; i <= sec.to; i++) {
        const a = answers[i];
        if (a && a.selected === questions[i].correctAnswer) correct += 1;
      }
      return {
        subjectId: sec.subjectId,
        subjectName: sec.subjectName,
        correct,
        total: sec.count,
        scorePercent: Math.round((correct / sec.count) * 100),
      };
    });
    const correctCount = breakdown.reduce((a, b) => a + b.correct, 0);
    onFinish({
      mode: 'exam',
      correctCount,
      totalQuestions: total,
      wrongCount: total - correctCount,
      scorePercent: Math.round((correctCount / total) * 100),
      durationSec: Math.round((Date.now() - startedAtRef.current) / 1000),
      sections: breakdown,
      answers,
      questions,
    });
  }, [answers, onFinish, questions, sections, total]);

  function selectOption(i) {
    if (revealed) return;
    setAnswers((prev) => {
      const next = prev.slice();
      next[idx] = { selected: i, revealed: true, correct: i === current.correctAnswer };
      return next;
    });
  }

  function goNext() {
    if (!isPremium) {
      onRequestPremium && onRequestPremium('Sinov imtihoni');
      return;
    }
    if (idx < total - 1) setIdx(idx + 1);
  }
  function goPrev() {
    if (idx > 0) setIdx(idx - 1);
  }

  return (
    <div className="container container-wide fade-up">
      <div className="quiz-head">
        <div>
          <div className="quiz-subject">
            Fan {sectionIdx + 1}/{sections.length} · {currentSection.subjectName}
          </div>
          <div className="quiz-counter">
            Savol <strong>{idx + 1}</strong> / {total}
          </div>
        </div>
        <div className="quiz-head-right">
          <Timer
            seconds={EXAM_DURATION_SEC}
            paused={false}
            urgentAt={300}
            onExpire={finish}
          />
          <button
            className="iconbtn"
            type="button"
            onClick={() => setConfirmExit(true)}
            aria-label="Imtihondan chiqish"
          >
            ✕ <span>Chiqish</span>
          </button>
        </div>
      </div>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={Math.round((answeredCount / total) * 100)}
      >
        <div
          className="progress-fill"
          style={{ width: (answeredCount / total) * 100 + '%' }}
        />
      </div>

      <div className="section-strip">
        {sections.map((sec, i) => {
          const isCurrent = i === sectionIdx;
          return (
            <span
              key={sec.subjectId}
              className={'section-pill' + (isCurrent ? ' is-current' : '')}
            >
              {sec.subjectName}
            </span>
          );
        })}
      </div>

      <h2 className="question" key={`q-${idx}`}>{current.question}</h2>

      <div className="options" key={`opts-${idx}`}>
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
        <button className="btn btn-ghost" onClick={goPrev} disabled={idx === 0}>
          ← Oldingi
        </button>
        <div className="btn-row">
          {isLast || answeredCount >= total ? (
            <button className="btn btn-primary" onClick={() => setConfirmFinish(true)}>
              Yakunlash ({answeredCount}/{total})
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
        title="Imtihondan chiqasizmi?"
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
        <p>Imtihon yakunlanmaydi va natijalar saqlanmaydi.</p>
      </Modal>

      <Modal
        open={confirmFinish}
        onClose={() => setConfirmFinish(false)}
        title="Imtihonni yakunlaysizmi?"
        footer={
          <>
            <button className="btn btn-ghost" onClick={() => setConfirmFinish(false)}>
              Davom etish
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setConfirmFinish(false);
                finish();
              }}
            >
              Yakunlash
            </button>
          </>
        }
      >
        <p>
          {answeredCount} ta savolga javob berdingiz ({total - answeredCount} ta javobsiz).
          Javobsiz savollar noto'g'ri hisoblanadi.
        </p>
      </Modal>
    </div>
  );
}
