import { makeTest } from './questions.js';
import { scoreTest } from './scoring.js';
import { addHistory, clearHistory, clearSession, loadHistory, loadSession, saveSession } from './storage.js';

const app = document.querySelector('#app');
let state = loadSession() || { screen:'home' };

function start() {
  state = { screen:'test', startedAt: Date.now(), index: 0, questions: makeTest(15), answers: {} };
  saveSession(state); render();
}
function choose(id, value) {
  state.answers[id] = Number(value);
  saveSession(state); render();
}
function next() { state.index = Math.min(state.index + 1, state.questions.length - 1); saveSession(state); render(); }
function prev() { state.index = Math.max(state.index - 1, 0); saveSession(state); render(); }
function finish() {
  const result = scoreTest(state.questions, state.answers, state.startedAt);
  addHistory(result); clearSession(); state = { screen:'result', result }; render();
}
function fmtDate(iso) { return new Date(iso).toLocaleString([], {dateStyle:'medium', timeStyle:'short'}); }
function elapsed(ms) { const m = Math.round(ms/60000); return `${m || 1} min`; }

function home() {
  const history = loadHistory();
  return `<section class="hero">
    <p class="eyebrow">SAT Math</p><h1>Mini Diagnostic</h1>
    <p class="lede">15 SAT-style math questions to estimate a rough score band and identify weak areas. Your data stays in this browser: active test in sessionStorage, completed history in localStorage.</p>
    <div class="actions"><button id="start">Start diagnostic</button>${loadSession()?.screen==='test' ? '<button id="resume" class="secondary">Resume session</button>' : ''}</div>
  </section>${historyHtml(history)}`;
}
function test() {
  const q = state.questions[state.index];
  const answered = Object.keys(state.answers).length;
  return `<section class="card">
    <div class="topline"><span>Question ${state.index + 1} of ${state.questions.length}</span><span>${q.topic} · ${'★'.repeat(q.difficulty)}</span></div>
    <progress value="${answered}" max="${state.questions.length}"></progress>
    <h2>${q.q}</h2>
    <div class="choices">${q.choices.map((c,i)=>`<label class="choice ${state.answers[q.id]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${state.answers[q.id]===i?'checked':''}/> <span>${String.fromCharCode(65+i)}. ${c}</span></label>`).join('')}</div>
    <div class="nav"><button id="prev" class="secondary" ${state.index===0?'disabled':''}>Back</button>${state.index < state.questions.length-1 ? '<button id="next">Next</button>' : `<button id="finish" ${answered < state.questions.length ? 'class="warn"' : ''}>Finish ${answered < state.questions.length ? `(${answered}/${state.questions.length})` : ''}</button>`}</div>
  </section>`;
}
function resultHtml(result) {
  return `<section class="card result"><p class="eyebrow">Result</p><h1>${result.scoreBand}</h1><p class="lede">Estimated SAT Math band · ${result.raw}/${result.count} correct · ${result.accuracy}% accuracy · ${elapsed(result.finishedAt-result.startedAt)}</p>
  <h3>Weak areas</h3><ul>${result.weakTopics.map(w=>`<li>${w.topic}: ${w.correct}/${w.total}</li>`).join('')}</ul>
  <details><summary>Review missed questions</summary>${result.questions.filter(q=>result.answers[q.id]!==q.answer).map(q=>`<div class="review"><b>${q.topic}</b><p>${q.q}</p><p>Your answer: ${q.answers?.[result.answers[q.id]] ?? q.choices[result.answers[q.id]] ?? 'blank'} · Correct: ${q.choices[q.answer]}</p><p>${q.explain}</p></div>`).join('') || '<p>No misses — nice work.</p>'}</details>
  <div class="actions"><button id="start">New diagnostic</button><button id="home" class="secondary">History</button></div></section>`;
}
function historyHtml(history) {
  return `<section class="history"><div class="section-head"><h2>History</h2>${history.length ? '<button id="clear" class="ghost">Clear local history</button>' : ''}</div>${history.length ? history.map(r=>`<article class="row"><b>${r.scoreBand}</b><span>${r.raw}/${r.count} · ${r.accuracy}%</span><span>${fmtDate(r.date)}</span><small>Weak: ${r.weakTopics.map(w=>w.topic).join(', ') || 'none'}</small></article>`).join('') : '<p class="muted">No completed tests yet.</p>'}</section>`;
}
function render() {
  app.innerHTML = state.screen === 'test' ? test() : state.screen === 'result' ? resultHtml(state.result) + historyHtml(loadHistory()) : home();
  app.querySelector('#start')?.addEventListener('click', start);
  app.querySelector('#resume')?.addEventListener('click', ()=>{ state = loadSession(); render(); });
  app.querySelector('#home')?.addEventListener('click', ()=>{ state={screen:'home'}; render(); });
  app.querySelector('#clear')?.addEventListener('click', ()=>{ if(confirm('Clear history stored in this browser?')) { clearHistory(); render(); }});
  app.querySelector('#prev')?.addEventListener('click', prev);
  app.querySelector('#next')?.addEventListener('click', next);
  app.querySelector('#finish')?.addEventListener('click', finish);
  app.querySelectorAll('input[name="answer"]').forEach(el => el.addEventListener('change', e => choose(state.questions[state.index].id, e.target.value)));
}
render();
