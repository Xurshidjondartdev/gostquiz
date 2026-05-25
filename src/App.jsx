import { useCallback, useEffect, useState } from 'react';
import TopBar from './components/TopBar.jsx';
import StartScreen from './screens/StartScreen.jsx';
import SubjectScreen from './screens/SubjectScreen.jsx';
import QuizScreen from './screens/QuizScreen.jsx';
import ResultScreen from './screens/ResultScreen.jsx';
import {
  clearAll,
  getHistory,
  getUserName,
  pushHistory,
  saveUserName,
  storageAvailable,
} from './lib/storage.js';

const SCREENS = {
  HOME: 'home',
  SUBJECT: 'subject',
  QUIZ: 'quiz',
  RESULT: 'result',
};

const SESSION_OPTS = { shuffleQuestions: true, shuffleOptions: true, questionCount: 20 };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [studentName, setStudentName] = useState(() => getUserName());
  const [subject, setSubject] = useState(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState(() => getHistory());

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', '#4f46e5');
  }, []);

  const handleStart = useCallback((name) => {
    setStudentName(name);
    saveUserName(name);
    setScreen(SCREENS.SUBJECT);
  }, []);

  const handlePickSubject = useCallback((s) => {
    setSubject(s);
    setScreen(SCREENS.QUIZ);
  }, []);

  const handleFinish = useCallback(
    (r) => {
      const entry = {
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
      setResult(r);
      setScreen(SCREENS.RESULT);
    },
    [studentName, subject],
  );

  const handleResetAll = useCallback(() => {
    clearAll();
    setStudentName('');
    setHistory([]);
    setSubject(null);
    setResult(null);
    setScreen(SCREENS.HOME);
  }, []);

  const goHome = useCallback(() => setScreen(SCREENS.HOME), []);

  return (
    <div className="app">
      <TopBar canGoHome={screen !== SCREENS.HOME} onHome={goHome} />

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

        {screen === SCREENS.HOME && (
          <StartScreen
            initialName={studentName}
            history={history}
            onStart={handleStart}
            onResetData={handleResetAll}
          />
        )}

        {screen === SCREENS.SUBJECT && (
          <SubjectScreen
            studentName={studentName}
            onPick={handlePickSubject}
            onBack={goHome}
          />
        )}

        {screen === SCREENS.QUIZ && subject && (
          <QuizScreen
            subject={subject}
            sessionOptions={SESSION_OPTS}
            onFinish={handleFinish}
            onExit={() => setScreen(SCREENS.SUBJECT)}
          />
        )}

        {screen === SCREENS.RESULT && subject && result && (
          <ResultScreen
            studentName={studentName}
            subject={subject}
            result={result}
            onRetry={() => setScreen(SCREENS.QUIZ)}
            onHome={goHome}
          />
        )}
      </main>
    </div>
  );
}
