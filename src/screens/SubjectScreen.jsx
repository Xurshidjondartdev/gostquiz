import { SUBJECTS } from '../data/subjects/index.js';

export default function SubjectScreen({ studentName, onPick, onBack }) {
  return (
    <div className="container fade-up">
      <div className="hero">
        <div className="eyebrow">Salom, {studentName}</div>
        <h1 className="h1">Fanni tanlang</h1>
        <p className="lede">
          Har bir fanda 10 ta savol. Javob tanlangach darhol izoh ko'rinadi.
        </p>
      </div>

      <div className="subject-grid">
        {SUBJECTS.map((s) => (
          <button key={s.id} type="button" className="subject-card" onClick={() => onPick(s)}>
            <div className="subject-glyph">{s.glyph}</div>
            <div className="subject-meta">
              <span className="subject-name">{s.name}</span>
              <span className="subject-tag">{s.tagline}</span>
            </div>
            <span className="subject-count">{s.questions.length} ta</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button className="btn btn-ghost" onClick={onBack}>
          ← Orqaga
        </button>
      </div>
    </div>
  );
}
