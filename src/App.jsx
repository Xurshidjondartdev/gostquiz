import { useCallback, useState } from 'react';
import TopBar from './components/TopBar.jsx';
import StartScreen from './screens/StartScreen.jsx';
import SubjectScreen from './screens/SubjectScreen.jsx';
import ModeScreen from './screens/ModeScreen.jsx';
import TimedQuizScreen from './screens/TimedQuizScreen.jsx';
import EndlessQuizScreen from './screens/EndlessQuizScreen.jsx';
import ExamScreen from './screens/ExamScreen.jsx';
import ResultScreen from './screens/ResultScreen.jsx';
import EndlessResultScreen from './screens/EndlessResultScreen.jsx';
import ExamResultScreen from './screens/ExamResultScreen.jsx';
import { SUBJECTS } from './data/subjects/index.js';
import {
  clearAll,
  getHistory,
  getUserName,
  pushHistory,
  saveUserName,
  storageAvailable,
} from './lib/storage.js';

const SCREEN = {
  HOME: 'home',
  SUBJECTS: 'subjects',
  MODE: 'mode',
  TIMED: 'timed',
  ENDLESS: 'endless',
  EXAM: 'exam',
  TIMED_RESULT: 'timed-result',
  ENDLESS_RESULT: 'endless-result',
  EXAM_RESULT: 'exam-result',
};

export default function App() {
  const [screen, setScreen] = useState(SCREEN.HOME);
  const [studentName, setStudentName] = useState(() => getUserName());
  const [subject, setSubject] = useState(null);
  const [timedResult, setTimedResult] = useState(null);
  const [endlessStats, setEndlessStats] = useState(null);
  const [examResult, setExamResult] = useState(null);
  const [history, setHistory] = useState(() => getHistory());

  const goHome = useCallback(() => setScreen(SCREEN.HOME), []);

  const handleStartName = useCallback((name) => {
    setStudentName(name);
    saveUserName(name);
  }, []);

  const handlePickSubjects = useCallback(() => setScreen(SCREEN.SUBJECTS), []);
  const handlePickExam = useCallback(() => setScreen(SCREEN.EXAM), []);

  const handlePickSubject = useCallback((s) => {
    setSubject(s);
    setScreen(SCREEN.MODE);
  }, []);

  const handlePickMode = useCallback((mode) => {
    setScreen(mode === 'timed' ? SCREEN.TIMED : SCREEN.ENDLESS);
  }, []);

  const handleTimedFinish = useCallback(
    (r) => {
      const entry = {
        type: 'subject',
        mode: 'timed',
        studentName,
        subjectId: subject.id,
        subjectName: subject.name,
        totalQuestions: r.totalQuestions,
        correctCount: r.correctCount,
        wrongCount: r.wrongCount,
        scorePercent: r.scorePercent,
        completedAt: Date.now(),
      };
      setHistory(pushHistory(entry));
      setTimedResult(r);
      setScreen(SCREEN.TIMED_RESULT);
    },
    [studentName, subject],
  );

  const handleEndlessExit = useCallback((stats) => {
    setEndlessStats(stats);
    setScreen(SCREEN.ENDLESS_RESULT);
  }, []);

  const handleExamFinish = useCallback(
    (r) => {
      const entry = {
        type: 'exam',
        studentName,
        subjectName: 'Sinov imtihoni',
        totalQuestions: r.totalQuestions,
        correctCount: r.correctCount,
        wrongCount: r.wrongCount,
        scorePercent: r.scorePercent,
        durationSec: r.durationSec,
        sections: r.sections.map((sec) => ({
          subjectId: sec.subjectId,
          subjectName: sec.subjectName,
          correct: sec.correct,
          total: sec.total,
          scorePercent: sec.scorePercent,
        })),
        completedAt: Date.now(),
      };
      setHistory(pushHistory(entry));
      setExamResult(r);
      setScreen(SCREEN.EXAM_RESULT);
    },
    [studentName],
  );

  const handleResetAll = useCallback(() => {
    clearAll();
    setStudentName('');
    setHistory([]);
    setSubject(null);
    setTimedResult(null);
    setEndlessStats(null);
    setExamResult(null);
    setScreen(SCREEN.HOME);
  }, []);

  return (
    <div className="app">
      <TopBar canGoHome={screen !== SCREEN.HOME} onHome={goHome} />

      <main className="main">
        {!storageAvailable && (
          <div className="container" style={{ marginBottom: 16 }}>
            <div
              className="card card-pad-sm"
              style={{
                background: 'var(--danger-soft)',
                borderColor: 'var(--danger)',
                color: 'var(--danger)',
                fontSize: 13,
              }}
            >
              LocalStorage o'chirilgan. Natijalar faqat joriy sessiyada saqlanadi.
            </div>
          </div>
        )}

        {screen === SCREEN.HOME && (
          <StartScreen
            initialName={studentName}
            history={history}
            onStartName={handleStartName}
            onPickExam={handlePickExam}
            onPickSubjects={handlePickSubjects}
            onResetData={handleResetAll}
          />
        )}

        {screen === SCREEN.SUBJECTS && (
          <SubjectScreen
            studentName={studentName}
            onPick={handlePickSubject}
            onBack={goHome}
          />
        )}

        {screen === SCREEN.MODE && subject && (
          <ModeScreen
            subject={subject}
            onPick={handlePickMode}
            onBack={() => setScreen(SCREEN.SUBJECTS)}
          />
        )}

        {screen === SCREEN.TIMED && subject && (
          <TimedQuizScreen
            subject={subject}
            onFinish={handleTimedFinish}
            onExit={() => setScreen(SCREEN.MODE)}
          />
        )}

        {screen === SCREEN.ENDLESS && subject && (
          <EndlessQuizScreen subject={subject} onExit={handleEndlessExit} />
        )}

        {screen === SCREEN.EXAM && (
          <ExamScreen
            subjects={SUBJECTS}
            onFinish={handleExamFinish}
            onExit={goHome}
          />
        )}

        {screen === SCREEN.TIMED_RESULT && subject && timedResult && (
          <ResultScreen
            studentName={studentName}
            subject={subject}
            result={timedResult}
            onRetry={() => setScreen(SCREEN.TIMED)}
            onHome={goHome}
          />
        )}

        {screen === SCREEN.ENDLESS_RESULT && subject && endlessStats && (
          <EndlessResultScreen
            subject={subject}
            stats={endlessStats}
            onRetry={() => setScreen(SCREEN.ENDLESS)}
            onHome={goHome}
          />
        )}

        {screen === SCREEN.EXAM_RESULT && examResult && (
          <ExamResultScreen
            studentName={studentName}
            result={examResult}
            onRetry={() => setScreen(SCREEN.EXAM)}
            onHome={goHome}
          />
        )}
      </main>
    </div>
  );
}
