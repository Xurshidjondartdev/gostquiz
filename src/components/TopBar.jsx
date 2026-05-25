import { formatPhone } from '../lib/phone.js';

export default function TopBar({ canGoHome, onHome, studentName, studentPhone }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">Q</span>
        <span>Quiz</span>
      </div>
      <div className="topbar-right">
        {studentName && studentPhone && (
          <span className="user-chip" title={formatPhone(studentPhone)}>
            <span className="user-chip-name">{studentName}</span>
            <span className="user-chip-phone">{formatPhone(studentPhone)}</span>
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
