export default function ModeScreen({ subject, onPick, onBack }) {
  return (
    <div className="container fade-up">
      <div className="hero">
        <div className="eyebrow">{subject.name}</div>
        <h1 className="h1">Rejimni tanlang</h1>
        <p className="lede">
          Tanlangan fan bo'yicha {subject.questions.length}+ ta savol mavjud. Quyidagi
          rejimlardan birini tanlang.
        </p>
      </div>

      <div className="mode-grid">
        <button type="button" className="mode-card" onClick={() => onPick('timed')}>
          <div className="mode-card-icon mode-card-icon-accent" aria-hidden>
            ⏱
          </div>
          <div className="mode-card-body">
            <div className="mode-card-title">Vaqtli</div>
            <div className="mode-card-tag">20 ta savol · har biriga 30 sekund</div>
            <ul className="mode-card-points">
              <li>Tezkor reaksiya talab qiladi</li>
              <li>Javob 30 sekundda kelmasa — keyingisi avtomatik</li>
              <li>Yakunda natija ko'rsatiladi</li>
            </ul>
          </div>
          <div className="mode-card-arrow" aria-hidden>
            →
          </div>
        </button>

        <button type="button" className="mode-card" onClick={() => onPick('endless')}>
          <div className="mode-card-icon" aria-hidden>
            ∞
          </div>
          <div className="mode-card-body">
            <div className="mode-card-title">Barcha testlar</div>
            <div className="mode-card-tag">Cheksiz mashq · vaqt cheklovsiz</div>
            <ul className="mode-card-points">
              <li>Fan ichidagi barcha savollar tasodifiy aylanadi</li>
              <li>Vaqt yo'q — o'rganish uchun ideal</li>
              <li>Istalgan vaqtda chiqish mumkin</li>
            </ul>
          </div>
          <div className="mode-card-arrow" aria-hidden>
            →
          </div>
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <button className="btn btn-ghost" onClick={onBack}>
          ← Boshqa fan
        </button>
      </div>
    </div>
  );
}
