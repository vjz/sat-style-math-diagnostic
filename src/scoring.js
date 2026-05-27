const bands = [
  [0, 3, '300–360'], [4, 5, '370–430'], [6, 7, '440–500'],
  [8, 9, '510–570'], [10, 11, '580–640'], [12, 13, '650–700'], [14, 15, '710–790']
];

export function scoreTest(questions, answers, startedAt) {
  let raw = 0, weightedCorrect = 0, weightedTotal = 0;
  const topics = {};
  for (const q of questions) {
    const ok = answers[q.id] === q.answer;
    const weight = q.difficulty;
    weightedTotal += weight;
    if (ok) { raw += 1; weightedCorrect += weight; }
    topics[q.topic] ??= {correct:0,total:0,weightedCorrect:0,weightedTotal:0};
    topics[q.topic].total += 1;
    topics[q.topic].weightedTotal += weight;
    if (ok) { topics[q.topic].correct += 1; topics[q.topic].weightedCorrect += weight; }
  }
  const pct = questions.length ? raw / questions.length : 0;
  const weightedPct = weightedTotal ? weightedCorrect / weightedTotal : 0;
  const scaledRaw = Math.round((pct * 0.6 + weightedPct * 0.4) * questions.length);
  const band = bands.find(([lo, hi]) => scaledRaw >= lo && scaledRaw <= hi)?.[2] ?? '300–790';
  const weakTopics = Object.entries(topics)
    .map(([topic, s]) => ({topic, accuracy: s.correct / s.total, correct:s.correct, total:s.total}))
    .sort((a,b)=>a.accuracy-b.accuracy)
    .slice(0,2);
  return {
    id: crypto.randomUUID?.() || String(Date.now()),
    date: new Date().toISOString(),
    startedAt,
    finishedAt: Date.now(),
    count: questions.length,
    raw,
    accuracy: Math.round(pct * 100),
    scoreBand: band,
    weakTopics,
    answers,
    questions: questions.map(({id,topic,difficulty,q,choices,answer,explain}) => ({id,topic,difficulty,q,choices,answer,explain}))
  };
}
