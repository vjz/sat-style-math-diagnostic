const HISTORY_KEY = 'sat-mini-history-v1';
const SESSION_KEY = 'sat-mini-session-v1';

export function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch { return []; }
}
export function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 30)));
}
export function addHistory(result) {
  const next = [result, ...loadHistory()];
  saveHistory(next);
}
export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
export function loadSession() {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); }
  catch { return null; }
}
export function saveSession(session) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}
export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}
