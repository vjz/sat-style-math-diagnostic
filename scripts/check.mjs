import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
for (const file of ['src/questions.js','src/scoring.js','src/storage.js','src/app.js']) {
  const path = new URL('../' + file, import.meta.url).pathname;
  const res = spawnSync(process.execPath, ['--check', path], { encoding: 'utf8' });
  if (res.status !== 0) throw new Error(`${file}\n${res.stderr || res.stdout}`);
  console.log('syntax ok:', file);
}
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
if (!html.includes('src/app.js')) throw new Error('index missing app script');
if (!html.includes('src/styles.css')) throw new Error('index missing stylesheet');
console.log('html ok');
