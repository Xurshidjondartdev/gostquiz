export default function TopBar({ canGoHome, onHome, studentName, isPremium }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">Q</span>
        <span>Quiz</span>
      </div>
      <div className="topbar-right">
        {studentName && (
          <span className="user-chip" title={studentName}>
            <span className="user-chip-name">{studentName}</span>
            <span className={'user-chip-status ' + (isPremium ? 'is-premium' : 'is-free')}>
              {isPremium ? '★ Premium' : 'Bepul'}
            </span>
          </span>
        )}
        {canGoHome && (
          <button className="iconbtn" type="button" onClick={onHome} title="Bosh sahifa">
            ⌂ <span>Bosh sahifa</span>
          </button>
        )}
      </div>
    </header>
  );
}
