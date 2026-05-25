export default function TopBar({ canGoHome, onHome }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">Q</span>
        <span>Quiz</span>
      </div>
      <div className="topbar-right">
        {canGoHome && (
          <button className="iconbtn" type="button" onClick={onHome} title="Bosh sahifa">
            ⌂ <span>Bosh sahifa</span>
          </button>
        )}
      </div>
    </header>
  );
}
