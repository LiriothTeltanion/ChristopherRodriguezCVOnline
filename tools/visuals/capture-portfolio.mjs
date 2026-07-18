import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUTPUT = path.join(ROOT, "public", "images");
const BASE_URL = "http://127.0.0.1:4173/ChristopherRodriguezCVOnline/";
const DEBUG_PORT = 9333;

const EDGE_CANDIDATES = [
  process.env.EDGE_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const browserPath = EDGE_CANDIDATES.find((candidate) => existsSync(candidate));
if (!browserPath) {
  throw new Error("Microsoft Edge or Chrome was not found. Set EDGE_PATH and retry.");
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function stopProcessTree(child) {
  if (!child?.pid || child.exitCode !== null) return;
  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const taskkill = spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
        stdio: "ignore",
        windowsHide: true,
      });
      taskkill.once("exit", resolve);
      taskkill.once("error", resolve);
    });
    return;
  }
  child.kill("SIGTERM");
  await Promise.race([new Promise((resolve) => child.once("exit", resolve)), sleep(2_000)]);
}

async function waitForUrl(url, attempts = 100) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {
      // The local server/browser is still starting.
    }
    await sleep(150);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

class CdpPage {
  constructor(webSocketUrl) {
    this.socket = new WebSocket(webSocketUrl);
    this.sequence = 0;
    this.pending = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !this.pending.has(message.id)) return;
      const { resolve, reject } = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result ?? {});
    });
  }

  command(method, params = {}) {
    const id = ++this.sequence;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  close() {
    this.socket.close();
  }
}

async function waitForApp(page) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const result = await page.command("Runtime.evaluate", {
      expression: "document.readyState === 'complete' && Boolean(document.querySelector('#hero'))",
      returnByValue: true,
    });
    if (result.result?.value === true) {
      await sleep(700);
      return;
    }
    await sleep(100);
  }
  throw new Error("The portfolio did not finish rendering.");
}

async function setViewport(page, width, height, mobile = false) {
  await page.command("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });
  await page.command("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
}

async function navigate(page, url) {
  await page.command("Page.navigate", { url });
  await waitForApp(page);
}

async function screenshot(page, relativePath, format = "jpeg", quality = 86) {
  const result = await page.command("Page.captureScreenshot", {
    format,
    quality: format === "jpeg" ? quality : undefined,
    fromSurface: true,
    captureBeyondViewport: false,
  });
  writeFileSync(path.join(ROOT, relativePath), Buffer.from(result.data, "base64"));
}

function imageData(relativePath, mimeType) {
  return `data:${mimeType};base64,${readFileSync(path.join(ROOT, relativePath)).toString("base64")}`;
}

function buildTour() {
  const desktop = imageData("public/images/portfolio-desktop.jpg", "image/jpeg");
  const teaching = imageData("public/images/portfolio-current-teaching.jpg", "image/jpeg");
  const mobile = imageData("public/images/portfolio-mobile.jpg", "image/jpeg");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750" role="img" aria-labelledby="title desc">
  <title id="title">Christopher Rodríguez bilingual portfolio tour</title>
  <desc id="desc">A brief three-scene tour of the real English desktop hero, current teaching roles and Spanish mobile interface. Reduced-motion readers see the first scene without animation.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071414"/><stop offset="1" stop-color="#123a36"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#000" flood-opacity=".35"/></filter>
  </defs>
  <style>
    .frame{opacity:0;animation:scene 12s ease-in-out infinite}.frame.two{animation-delay:-8s}.frame.three{animation-delay:-4s}
    .label{font:700 20px system-ui,Segoe UI,sans-serif;letter-spacing:2px;fill:#99f6e4}.title{font:800 34px system-ui,Segoe UI,sans-serif;fill:#f0fdfa}
    @keyframes scene{0%,29%{opacity:1}33%,100%{opacity:0}}
    @media (prefers-reduced-motion:reduce){.frame{animation:none!important;opacity:0}.frame.one{opacity:1}}
  </style>
  <rect width="1200" height="750" rx="28" fill="url(#bg)"/>
  <g class="frame one"><text x="54" y="48" class="label">ENGLISH · DESKTOP</text><image href="${desktop}" x="44" y="72" width="1112" height="634" preserveAspectRatio="xMidYMid slice" filter="url(#shadow)"/></g>
  <g class="frame two"><text x="54" y="48" class="label">CURRENT TEACHING · VERIFIED CONTENT STATES</text><image href="${teaching}" x="44" y="72" width="1112" height="634" preserveAspectRatio="xMidYMid slice" filter="url(#shadow)"/></g>
  <g class="frame three"><text x="54" y="88" class="label">ESPAÑOL · MOBILE</text><text x="54" y="132" class="title">Una experiencia bilingüe y accesible</text><text x="54" y="176" fill="#b9d8d2" font-family="system-ui,Segoe UI,sans-serif" font-size="22">Preferencias persistentes · navegación clara · movimiento reducido</text><image href="${mobile}" x="720" y="42" width="410" height="666" preserveAspectRatio="xMidYMid slice" filter="url(#shadow)"/></g>
</svg>\n`;
  writeFileSync(path.join(OUTPUT, "portfolio-tour.svg"), svg);
}

function socialPreviewHtml() {
  const desktop = imageData("public/images/portfolio-desktop.jpg", "image/jpeg");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    *{box-sizing:border-box}html,body{margin:0;width:1280px;height:640px;overflow:hidden}body{font-family:Inter,Segoe UI,Arial,sans-serif;color:#f0fdfa;background:radial-gradient(circle at 78% 18%,#155e55 0,transparent 31%),linear-gradient(135deg,#061313,#0c2926 62%,#123a36)}
    .frame{position:absolute;inset:30px;border:1px solid #2dd4bf55;border-radius:30px;overflow:hidden}.rail{position:absolute;left:0;top:0;bottom:0;width:8px;background:linear-gradient(#5eead4,#14b8a6)}
    .copy{position:absolute;left:66px;top:66px;width:550px}.eyebrow{display:inline-flex;padding:10px 17px;border:1px solid #5eead466;border-radius:999px;color:#99f6e4;font-weight:800;letter-spacing:2px;font-size:16px}.copy h1{font-size:58px;line-height:1.02;margin:30px 0 14px;letter-spacing:-2px}.role{font-size:28px;color:#5eead4;font-weight:750;line-height:1.25}.summary{font-size:21px;line-height:1.45;color:#c1ddd8;margin-top:23px}.chips{display:flex;gap:12px;margin-top:30px}.chip{padding:10px 15px;border:1px solid #5eead466;border-radius:999px;font-size:16px;font-weight:700;color:#d8f6f1}.browser{position:absolute;right:-35px;top:78px;width:630px;height:438px;border:2px solid #5eead4;border-radius:22px;background:#071414;box-shadow:0 28px 80px #0009;overflow:hidden;transform:rotate(-1.3deg)}.bar{height:38px;background:#102826;display:flex;align-items:center;gap:8px;padding:0 15px}.dot{width:10px;height:10px;border-radius:50%;background:#2dd4bf}.bar .dot:nth-child(2){background:#fbbf24}.bar .dot:nth-child(3){background:#60a5fa}.browser img{width:100%;height:400px;object-fit:cover;object-position:top}.footer{position:absolute;left:67px;bottom:42px;color:#79aaa2;font-size:14px;letter-spacing:1.5px;text-transform:uppercase}
  </style></head><body><div class="frame"><div class="rail"></div><section class="copy"><div class="eyebrow">BILINGUAL EDUCATOR PORTFOLIO</div><h1>Christopher<br>Rodríguez</h1><div class="role">English Educator · ESL Specialist<br>Curriculum Designer</div><div class="summary">Real teaching experience presented through an accessible English and Spanish interface.</div><div class="chips"><span class="chip">EN + ES</span><span class="chip">React + TypeScript</span><span class="chip">Accessible UX</span></div></section><div class="browser"><div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><img src="${desktop}" alt=""></div><div class="footer">LiriothTeltanion / ChristopherRodriguezCVOnline</div></div></body></html>`;
}

mkdirSync(OUTPUT, { recursive: true });
const profileDir = mkdtempSync(path.join(tmpdir(), "christopher-portfolio-capture-"));
const vitePath = path.join(ROOT, "node_modules", "vite", "bin", "vite.js");
const vite = spawn(process.execPath, [vitePath, "--host", "127.0.0.1", "--port", "4173"], {
  cwd: ROOT,
  stdio: "ignore",
});
const browser = spawn(
  browserPath,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${profileDir}`,
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true },
);

let page;
try {
  await waitForUrl(BASE_URL);
  await waitForUrl(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
  const targetResponse = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?about:blank`, {
    method: "PUT",
  });
  const target = await targetResponse.json();
  page = new CdpPage(target.webSocketDebuggerUrl);
  await page.open();
  await page.command("Page.enable");
  await page.command("Runtime.enable");
  const initialPreferencesScript = await page.command("Page.addScriptToEvaluateOnNewDocument", {
    source: `try { localStorage.setItem('cr-language','en'); localStorage.setItem('cr-theme','dark'); localStorage.setItem('cr-color-theme','teal'); } catch {}`,
  });

  await setViewport(page, 1440, 900);
  await navigate(page, BASE_URL);
  await screenshot(page, "public/images/portfolio-desktop.jpg");

  await page.command("Runtime.evaluate", {
    expression:
      "document.querySelector('#current-teaching')?.scrollIntoView({block:'start'}); true",
  });
  await sleep(500);
  await screenshot(page, "public/images/portfolio-current-teaching.jpg");

  await page.command("Runtime.evaluate", {
    expression: "localStorage.setItem('cr-language','es'); true",
  });
  await page.command("Page.removeScriptToEvaluateOnNewDocument", {
    identifier: initialPreferencesScript.identifier,
  });
  await setViewport(page, 430, 932, true);
  await navigate(page, `${BASE_URL}?capture=mobile`);
  await page.command("Runtime.evaluate", { expression: "window.scrollTo(0, 0); true" });
  await sleep(250);
  await screenshot(page, "public/images/portfolio-mobile.jpg");

  buildTour();

  await setViewport(page, 1280, 640);
  const socialDataUrl = `data:text/html;base64,${Buffer.from(socialPreviewHtml()).toString("base64")}`;
  await page.command("Page.navigate", { url: socialDataUrl });
  await sleep(500);
  await screenshot(page, "public/images/christopher-portfolio-social-preview.png", "png");

  const socialBytes = readFileSync(
    path.join(OUTPUT, "christopher-portfolio-social-preview.png"),
  ).length;
  if (socialBytes >= 1_000_000) {
    throw new Error(`Social preview is ${socialBytes} bytes; it must stay below 1 MB.`);
  }
  console.log(`✅ Real portfolio visuals captured · social preview ${socialBytes} bytes`);
} finally {
  page?.close();
  await stopProcessTree(browser);
  await stopProcessTree(vite);
  await sleep(500);
  const safeTempRoot = path.resolve(tmpdir());
  const resolvedProfile = path.resolve(profileDir);
  if (resolvedProfile.startsWith(`${safeTempRoot}${path.sep}`)) {
    rmSync(resolvedProfile, { recursive: true, force: true, maxRetries: 6, retryDelay: 250 });
  }
}
