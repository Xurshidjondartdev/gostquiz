import { useEffect, useRef, useState } from 'react';
import { formatClock } from '../lib/quiz.js';

export default function Timer({ seconds, paused, onExpire, urgentAt = 10, resetKey }) {
  const [remaining, setRemaining] = useState(seconds);
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    setRemaining(seconds);
    expiredRef.current = false;
  }, [seconds, resetKey]);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          if (!expiredRef.current) {
            expiredRef.current = true;
            const cb = onExpireRef.current;
            if (cb) setTimeout(cb, 0);
          }
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [paused]);

  const urgent = remaining <= urgentAt;

  return (
    <span className={'timer' + (urgent ? ' is-urgent' : '')} aria-live="polite">
      <span className="timer-icon" aria-hidden>
        ⏱
      </span>
      <span className="timer-value">{formatClock(remaining)}</span>
    </span>
  );
}
