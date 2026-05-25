const LS_USER = 'quiz.user.v1';
const LS_HISTORY = 'quiz.history.v1';

const memory = new Map();

const isAvailable = (() => {
  try {
    const probe = '__quiz_probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
})();

function loadJSON(key, fallback) {
  try {
    if (isAvailable) {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    }
    return memory.has(key) ? memory.get(key) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    if (isAvailable) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      memory.set(key, value);
    }
  } catch {
    /* quota / private mode */
  }
}

function removeKey(key) {
  if (isAvailable) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* noop */
    }
  } else {
    memory.delete(key);
  }
}

export function getUserName() {
  return loadJSON(LS_USER, '');
}

export function saveUserName(name) {
  saveJSON(LS_USER, name);
}

export function getHistory() {
  const list = loadJSON(LS_HISTORY, []);
  return Array.isArray(list) ? list : [];
}

export function pushHistory(entry) {
  const list = getHistory();
  const next = [entry, ...list].slice(0, 30);
  saveJSON(LS_HISTORY, next);
  return next;
}

export function clearAll() {
  removeKey(LS_USER);
  removeKey(LS_HISTORY);
}

export const storageAvailable = isAvailable;
