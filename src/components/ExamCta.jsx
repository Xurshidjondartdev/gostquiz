export default function ExamCta({ onStart }) {
  return (
    <button type="button" className="exam-cta" onClick={onStart}>
      <div className="exam-cta-icon" aria-hidden>
        ⌬
      </div>
      <div className="exam-cta-body">
        <div className="exam-cta-eyebrow">Sinov imtixoni</div>
        <div className="exam-cta-title">5 fan · 50 ta savol · 1 soat</div>
        <div className="exam-cta-tag">
          Har fandan 10 ta tasodifiy savol. Vaqt cheklangan, real imtihon kabi.
        </div>
      </div>
      <div className="exam-cta-arrow" aria-hidden>
        →
      </div>
    </button>
  );
}
