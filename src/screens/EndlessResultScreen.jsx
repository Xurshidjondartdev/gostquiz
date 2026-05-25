import { scoreColor } from '../lib/quiz.js';

export default function EndlessResultScreen({ subject, stats, onRetry, onHome }) {
  const accuracy = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
  return (
    <div className="container fade-up">
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="result-hero">
          <div className="eyebrow">{subject.name} · Barcha testlar</div>
          <p className="score-big">
            <span className="score-num">{stats.correct}</span>
            <span className="score-denom">/{stats.total}</span>
          </p>
          <p className="score-label">
            Aniqlik: <strong style={{ color: 'var(--ink)' }}>{accuracy}%</strong>
          </p>
        </div>

        <div className="result-stats">
          <div className="stat">
            <div className="stat-num success">{stats.correct}</div>
            <div className="stat-label">To'g'ri</div>
          </div>
          <div className="stat">
            <div className="stat-num danger">{stats.wrong}</div>
            <div className="stat-label">Noto'g'ri</div>
          </div>
          <div className="stat">
            <div className={'stat-num ' + scoreColor(accuracy)}>{accuracy}%</div>
            <div className="stat-label">Aniqlik</div>
          </div>
        </div>

        <div style={{ padding: '0 24px 24px' }}>
          <div className="btn-row">
            <button className="btn btn-primary" onClick={onRetry} style={{ flex: 1 }}>
              Davom etish
            </button>
            <button className="btn btn-ghost" onClick={onHome} style={{ flex: 1 }}>
              Bosh sahifa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
