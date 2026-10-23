import { chromium } from '@playwright/test';
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
console.log(await page.evaluate(() => ({ width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight, bodyFont: getComputedStyle(document.body).fontFamily, images: [...document.querySelectorAll('main img')].map(i => ({ src: i.currentSrc, complete: i.complete, width: i.clientWidth, height: i.clientHeight, sizes: i.sizes, y: i.getBoundingClientRect().y })) })));
await page.screenshot({ path: 'docs/evidencias/diagnostic.png' });
await browser.close();
