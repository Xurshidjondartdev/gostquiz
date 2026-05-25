import { useCallback, useEffect, useMemo, useState } from 'react';
import TopBar from './components/TopBar.jsx';
import PremiumModal from './components/PremiumModal.jsx';
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
import { isPremiumPhone } from './data/allowedPhones.js';
import {
  clearAll,
  getHistory,
  getUserName,
  getUserPhone,
  pushHistory,
  saveUserName,
  saveUserPhone,
  storageAvailable,
} from './lib/storage.js';

const SCREEN = {
  HOME: 'home',
  SUBJECTS: 'subjects',
  MODE: 'mode',
  TIMED: 'timed',
  ENDLESS: 'endless',
  UMUMIY: 'umumiy',
  EXAM: 'exam',
  TIMED_RESULT: 'timed-result',
  ENDLESS_RESULT: 'endless-result',
  UMUMIY_RESULT: 'umumiy-result',
  EXAM_RESULT: 'exam-result',
};

const UMUMIY_SUBJECT = {
  id: 'umumiy',
  name: 'Umumiy',
  tagline: '5 fandan aralash',
  glyph: '⊕',
  questions: SUBJECTS.flatMap((s) =>
    s.questions.map((q) => ({ ...q, subjectId: s.id, subjectName: s.name })),
  ),
};

export default function App() {
  const [screen, setScreen] = useState(SCREEN.HOME);
  const [studentName, setStudentName] = useState(() => getUserName());
  const [studentPhone, setStudentPhone] = useState(() => getUserPhone());
  const [subject, setSubject] = useState(null);
  const [timedResult, setTimedResult] = useState(null);
  const [endlessStats, setEndlessStats] = useState(null);
  const [examResult, setExamResult] = useState(null);
  const [history, setHistory] = useState(() => getHistory());
  const [premiumModal, setPremiumModal] = useState({ open: false, feature: '' });

  const isPremium = useMemo(
    () => !!studentPhone && isPremiumPhone(studentPhone),
    [studentPhone],
  );

  const goHome = useCallback(() => setScreen(SCREEN.HOME), []);

  const handleStartUser = useCallback((name) => {
    setStudentName(name);
    saveUserName(name);
  }, []);

  const handleRequestPremium = useCallback((feature) => {
    setPremiumModal({ open: true, feature });
  }, []);

  const handleClosePremium = useCallback(() => {
    setPremiumModal({ open: false, feature: '' });
  }, []);

  const handleActivatePremium = useCallback((normalizedPhone) => {
    setStudentPhone(normalizedPhone);
    saveUserPhone(normalizedPhone);
    setPremiumModal({ open: false, feature: '' });
  }, []);

  const handlePickSubjects = useCallback(() => setScreen(SCREEN.SUBJECTS), []);
  const handlePickExam = useCallback(() => setScreen(SCREEN.EXAM), []);
  const handlePickUmumiy = useCallback(() => {
    setSubject(UMUMIY_SUBJECT);
    setScreen(SCREEN.UMUMIY);
  }, []);

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

  const handleUmumiyExit = useCallback((stats) => {
    setEndlessStats(stats);
    setScreen(SCREEN.UMUMIY_RESULT);
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
    setStudentPhone('');
    setHistory([]);
    setSubject(null);
    setTimedResult(null);
    setEndlessStats(null);
    setExamResult(null);
    setScreen(SCREEN.HOME);
  }, []);

  // Saqlangan premium telefon ro'yxatdan chiqarilgan bo'lsa — premium o'chadi
  useEffect(() => {
    if (studentPhone && !isPremiumPhone(studentPhone)) {
      setStudentPhone('');
      saveUserPhone('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <TopBar
        canGoHome={screen !== SCREEN.HOME}
        onHome={goHome}
        studentName={studentName}
        isPremium={isPremium}
      />

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
            onStartUser={handleStartUser}
            onPickExam={handlePickExam}
            onPickSubjects={handlePickSubjects}
            onPickUmumiy={handlePickUmumiy}
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
            isPremium={isPremium}
            onRequestPremium={handleRequestPremium}
            onFinish={handleTimedFinish}
            onExit={() => setScreen(SCREEN.MODE)}
          />
        )}

        {screen === SCREEN.ENDLESS && subject && (
          <EndlessQuizScreen
            subject={subject}
            requirePremium
            isPremium={isPremium}
            onRequestPremium={handleRequestPremium}
            onExit={handleEndlessExit}
          />
        )}

        {screen === SCREEN.UMUMIY && (
          <EndlessQuizScreen subject={UMUMIY_SUBJECT} onExit={handleUmumiyExit} showSubjectTag />
        )}

        {screen === SCREEN.EXAM && (
          <ExamScreen
            subjects={SUBJECTS}
            isPremium={isPremium}
            onRequestPremium={handleRequestPremium}
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

        {screen === SCREEN.UMUMIY_RESULT && endlessStats && (
          <EndlessResultScreen
            subject={UMUMIY_SUBJECT}
            stats={endlessStats}
            onRetry={() => setScreen(SCREEN.UMUMIY)}
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

      <PremiumModal
        open={premiumModal.open}
        featureName={premiumModal.feature}
        onClose={handleClosePremium}
        onActivate={handleActivatePremium}
      />
    </div>
  );
}
