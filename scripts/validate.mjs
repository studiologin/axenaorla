import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.TEST_URL || 'http://127.0.0.1:3000';
const out = path.resolve('docs/evidencias');
await fs.mkdir(out, { recursive: true });
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await chromium.launch({ executablePath, headless: true });
const results = { url: base, date: new Date().toISOString(), widths: [], checks: [], errors: [], accessibility: [] };
const check = (name, passed, detail = '') => { results.checks.push({ name, passed, detail }); if (!passed) throw new Error(name + ': ' + detail); };
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on('pageerror', error => results.errors.push(error.message));
  const response = await page.goto(base, { waitUntil: 'networkidle' });
  check('Página retorna HTTP 200', response.status() === 200);
  await page.evaluate(() => document.fonts.ready);
  for (const width of [1440, 1024, 768, 375]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    for (let top = 0; top < await page.evaluate(() => document.documentElement.scrollHeight); top += 900) {
      await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), top);
      await page.waitForTimeout(70);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForFunction(() => [...document.querySelectorAll('main img')].filter(i => !i.closest('dialog') && i.clientWidth > 0).every(i => i.complete), undefined, { timeout: 30000 });
    await page.waitForTimeout(650);
    const horizontal = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    const broken = await page.locator('main img').evaluateAll(images => images.filter(i => !i.closest('dialog') && i.clientWidth > 0 && (!i.complete || !i.naturalWidth)).map(i => i.src));
    results.widths.push({ width, horizontalOverflow: horizontal, brokenImages: broken });
    check(`Sem rolagem horizontal em ${width}px`, !horizontal);
    await page.screenshot({ path: path.join(out, `home-${width}.png`), fullPage: false });
    check(`Imagens carregadas em ${width}px`, broken.length === 0, broken.join(', '));
    if ([1440, 768, 375].includes(width)) await page.screenshot({ path: path.join(out, `home-${width}-full.png`), fullPage: true });
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    results.accessibility.push({ width, violations: axe.violations });
  }
  check('Um único h1', await page.locator('h1').count() === 1);
  check('Idioma pt-BR', await page.locator('html').getAttribute('lang') === 'pt-BR');
  const links = await page.locator('a').evaluateAll(elements => elements.map(a => a.getAttribute('href')));
  check('Nenhum link vazio', links.every(href => href && href !== '#'));
  const missing = await page.locator('a[href*="#"]').evaluateAll(elements => elements.map(a => a.getAttribute('href')).filter(h => h.startsWith('#') || h.startsWith('/#')).map(h => h.split('#')[1]).filter(id => !document.getElementById(id)));
  check('Todas as âncoras têm destino', !missing.length, missing.join(','));
  check('WhatsApp real', await page.locator('a[href^="https://wa.me/5511994196320"]').count() === 1);
  check('E-mail real', await page.locator('a[href="mailto:manoel@studiologin.com.br"]').count() >= 1);
  const html = await page.content();
  check('Sem projeções financeiras no HTML', !/1\.260|1\.177|450 mil|R\$/.test(html));

  const menu = page.getByRole('button', { name: 'Abrir menu' });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await menu.focus(); await page.keyboard.press('Enter');
  check('Menu abre pelo teclado', await page.locator('#mobile-menu').evaluate(el => el.open));
  await page.keyboard.press('Shift+Tab');
  check('Foco preso no menu', await page.evaluate(() => document.activeElement.closest('#mobile-menu') !== null));
  await page.keyboard.press('Escape');
  check('Esc fecha menu e devolve foco', await menu.evaluate(el => document.activeElement === el));
  await menu.click();
  await page.locator('#mobile-menu a[href="/#experiencia"]').click();
  check('Âncora móvel fecha menu', !(await page.locator('#mobile-menu').evaluate(el => el.open)));
  await page.locator('#galeria').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Gastronomia', exact: true }).click();
  check('Filtro de gastronomia', await page.locator('.gallery-grid figure').count() === 2);
  const thumbnail = page.locator('.gallery-grid button').first();
  await thumbnail.focus(); await page.keyboard.press('Enter');
  check('Lightbox abre pelo teclado', await page.locator('.lightbox').evaluate(el => el.open));
  const before = await page.locator('.lightbox-image').getAttribute('alt');
  await page.keyboard.press('ArrowRight');
  check('Seta muda imagem', before !== await page.locator('.lightbox-image').getAttribute('alt'));
  await page.keyboard.press('Tab'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab');
  check('Foco preso no lightbox', await page.evaluate(() => document.activeElement.closest('.lightbox') !== null));
  const dialogAxe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
  results.accessibility.push({ view: 'lightbox', violations: dialogAxe.violations });
  await page.screenshot({ path: path.join(out, 'lightbox-mobile.png') });
  await page.keyboard.press('Escape');
  check('Lightbox devolve foco', await thumbnail.evaluate(el => document.activeElement === el));
  await page.getByRole('button', { name: 'Todas', exact: true }).click();
  const summary = page.locator('.faq summary').first();
  await summary.focus(); await page.keyboard.press('Enter');
  check('FAQ abre pelo teclado', await page.locator('.faq details').first().evaluate(el => el.open));
  await page.keyboard.press('Enter');
  check('FAQ fecha pelo teclado', !(await page.locator('.faq details').first().evaluate(el => el.open)));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator('#experiencia').scrollIntoViewIfNeeded();
  const transforms = await page.locator('.parallax').evaluateAll(els => els.map(el => getComputedStyle(el).transform));
  check('Movimento reduzido remove parallax', transforms.every(t => t === 'none'));
  await page.screenshot({ path: path.join(out, 'reduced-motion.png') });
  for (const route of ['/privacidade', '/creditos']) {
    const r = await page.goto(base + route, { waitUntil: 'networkidle' });
    check(`Rota ${route}`, r.status() === 200);
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    results.accessibility.push({ route, violations: audit.violations });
  }
  const nojs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
  const staticPage = await nojs.newPage(); await staticPage.goto(base);
  check('Conteúdo sem JavaScript', await staticPage.locator('h1').isVisible() && await staticPage.locator('#parcerias h2').isVisible());
  check('Navegação alternativa sem JavaScript', await staticPage.locator('.nojs-nav').isVisible());
  await staticPage.locator('.faq summary').first().click();
  check('FAQ nativa sem JavaScript', await staticPage.locator('.faq details').first().getAttribute('open') !== null);
  await nojs.close();
  const touchContext = await browser.newContext({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });
  const touchPage = await touchContext.newPage(); await touchPage.goto(base, { waitUntil: 'networkidle' });
  await touchPage.getByRole('button', { name: 'Abrir menu' }).tap();
  check('Menu funciona com toque', await touchPage.locator('#mobile-menu').evaluate(el => el.open));
  await touchPage.getByRole('button', { name: 'Fechar menu' }).tap();
  await touchPage.locator('.gallery-grid button').first().tap();
  check('Lightbox funciona com toque', await touchPage.locator('.lightbox').evaluate(el => el.open));
  await touchPage.getByRole('button', { name: 'Fechar imagem' }).tap();
  await touchContext.close();
  check('Sem erros de JavaScript', results.errors.length === 0, results.errors.join('\n'));
  const violations = results.accessibility.flatMap(a => a.violations);
  console.log(JSON.stringify({ checks: results.checks.length, widths: results.widths, violations: violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })), errors: results.errors }, null, 2));
  if (violations.length) process.exitCode = 1;
  await context.close();
} catch (error) {
  results.failure = String(error); console.error(error); process.exitCode = 1;
} finally {
  await fs.writeFile(path.join(out, 'browser-validation.json'), JSON.stringify(results, null, 2));
  await browser.close();
}
