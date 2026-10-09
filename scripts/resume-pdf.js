// Renders /resume from a fresh production build into the PDF behind its "Download PDF" button.
// Needs a local Chromium-based browser; set CHROME_PATH if Edge/Chrome isn't in a default location.
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { build, preview } from "vite";

const OUT_FILE = resolve("public/assets/Graven_Niel_Corias_CV.pdf");

const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => path && existsSync(path));

if (!browser) {
  console.error("No Chromium-based browser found. Set CHROME_PATH to an Edge or Chrome executable.");
  process.exit(1);
}

await build({ logLevel: "warn" });
const server = await preview({ logLevel: "warn", preview: { port: 4183, strictPort: true } });
const profile = mkdtempSync(join(tmpdir(), "gn-resume-"));

try {
  const url = new URL("resume", server.resolvedUrls.local[0]).href;
  // Async spawn, not spawnSync: the preview server shares this event loop and must keep serving.
  const code = await new Promise((done, fail) => {
    spawn(browser, [
      "--headless",
      "--disable-gpu",
      "--no-first-run",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=10000", // let React render and the web fonts load before printing
      `--print-to-pdf=${OUT_FILE}`,
      url,
    ], { stdio: "inherit" }).on("error", fail).on("close", done);
  });
  if (code !== 0) throw new Error(`Browser exited with code ${code}`);
  console.log(`Wrote ${OUT_FILE}`);
} finally {
  await server.close();
  rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
