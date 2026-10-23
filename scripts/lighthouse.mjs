import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import fs from 'node:fs/promises';
import path from 'node:path';
const device = process.argv[2] || 'mobile';
const out = path.resolve('docs/evidencias');
await fs.mkdir(out, { recursive: true });
const chrome = await launch({ chromePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', chromeFlags: ['--headless=new', '--disable-gpu', '--no-first-run'], userDataDir: path.join(out, `lighthouse-profile-${device}`) });
try {
  const result = await lighthouse(process.env.TEST_URL || 'http://127.0.0.1:3000', {
    port: chrome.port, output: ['json', 'html'], logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    ...(device === 'desktop' ? { formFactor: 'desktop', screenEmulation: { mobile: false, width: 1440, height: 1000, deviceScaleFactor: 1, disabled: false }, throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 } } : {}),
  });
  await fs.writeFile(path.join(out, `lighthouse-${device}.json`), result.report[0]);
  await fs.writeFile(path.join(out, `lighthouse-${device}.html`), result.report[1]);
  const { lhr } = result;
  console.log(JSON.stringify({ device, scores: Object.fromEntries(Object.entries(lhr.categories).map(([key, val]) => [key, val.score * 100])), metrics: Object.fromEntries(['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time', 'first-contentful-paint'].map(key => [key, lhr.audits[key].displayValue])), warnings: lhr.runWarnings, failed: Object.values(lhr.audits).filter(a => a.score !== null && a.score < 0.9).map(a => ({ id: a.id, title: a.title, value: a.displayValue })) }, null, 2));
} finally { await chrome.kill(); }
