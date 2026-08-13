// End-to-end checks against a running dev server:
//   npm run dev    (in one terminal)
//   npm run verify (in another)
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = process.env.VERIFY_OUT ?? ".verify-screenshots";
const URL = process.env.VERIFY_URL ?? "http://localhost:3000";
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
let failures = 0;

function report(label, ok, detail = "") {
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? " — " + detail : ""}`);
}

async function openPage(ctxOpts) {
  const page = await browser.newPage(ctxOpts);
  const errors = [];
  const bad = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("response", (r) => r.status() >= 400 && bad.push(`${r.status()} ${r.url()}`));
  await page.goto(URL, { waitUntil: "networkidle" });
  return { page, errors, bad };
}

// ---- 1. screenshots + console/404 checks at three widths ----
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["tablet", 768, 1000],
  ["mobile", 390, 900],
]) {
  const { page, errors, bad } = await openPage({ viewport: { width, height } });
  // let reveals and skyline finish
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/v2-${name}.png`, fullPage: true });
  report(`${name} console clean`, errors.length === 0, errors.slice(0, 3).join(" | "));
  report(`${name} no 404s`, bad.length === 0, bad.slice(0, 5).join(" | "));

  // The page body must never scroll sideways.
  const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  report(`${name} no horizontal overflow`, docWidth <= width + 1, `body ${docWidth}px vs viewport ${width}px`);

  // Name the widest offender so a regression is actionable, not just red.
  if (docWidth > width + 1) {
    const culprits = await page.evaluate((w) =>
      [...document.querySelectorAll("*")]
        .filter((e) => e.getBoundingClientRect().right > w + 1)
        .slice(0, 3)
        .map((e) => `${e.tagName.toLowerCase()}.${String(e.className).slice(0, 60)}`),
      width,
    );
    console.log("       widest:", culprits.join(" | "));
  }
  await page.close();
}

// ---- 2. no element left stuck invisible ----
{
  const { page } = await openPage({ viewport: { width: 1440, height: 1000 } });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
  const hidden = await page.$$eval(".reveal", (els) =>
    els.filter((e) => parseFloat(getComputedStyle(e).opacity) < 0.9).length,
  );
  report("all reveals visible after scroll", hidden === 0, `${hidden} still transparent`);
  await page.close();
}

// ---- 3. departments keyboard navigation ----
{
  const { page } = await openPage({ viewport: { width: 1440, height: 1000 } });
  await page.locator("#departments").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  const firstTab = page.locator('[role="tab"][aria-selected="true"]');
  const startLabel = (await firstTab.textContent())?.trim();
  await firstTab.focus();

  for (let i = 0; i < 3; i++) {
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(180);
  }
  const afterLabel = (
    await page.locator('[role="tab"][aria-selected="true"]').textContent()
  )?.trim();
  report("arrow keys change selection", startLabel !== afterLabel, `${startLabel} -> ${afterLabel}`);

  const panelHeading = await page.locator('[role="tabpanel"] h3').textContent();
  report(
    "panel follows selection",
    !!panelHeading && afterLabel?.includes(panelHeading.replace(" Department", "").slice(0, 6)),
    `panel: ${panelHeading}`,
  );

  const selectedCount = await page.locator('[role="tab"][aria-selected="true"]').count();
  report("exactly one tab selected", selectedCount === 1, `${selectedCount} selected`);

  await page.keyboard.press("End");
  await page.waitForTimeout(200);
  const endLabel = (await page.locator('[role="tab"][aria-selected="true"]').textContent())?.trim();
  report("End key jumps to last", endLabel?.includes("Product Design"), endLabel);

  await page.screenshot({ path: `${OUT}/v2-departments-kbd.png`, clip: await page.locator("#departments").boundingBox() });
  await page.close();
}

// ---- 4. events accordion + gallery dialog ----
{
  const { page } = await openPage({ viewport: { width: 1440, height: 1000 } });
  await page.locator("#events").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  await page.getByRole("button", { name: "Info" }).first().click();
  await page.waitForTimeout(300);
  report("Info expands detail", await page.locator("#info-devfest").isVisible());

  await page.getByRole("button", { name: "Event Gallery" }).first().click();
  await page.waitForTimeout(400);
  const dialogOpen = await page.evaluate(() => document.querySelector("dialog")?.open === true);
  report("gallery dialog opens", dialogOpen);

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  const dialogClosed = await page.evaluate(() => document.querySelector("dialog")?.open === false);
  report("Esc closes dialog", dialogClosed);
  await page.close();
}

// ---- 5. reduced motion: page fully visible and static ----
{
  const { page, errors } = await openPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await page.waitForTimeout(800);
  const invisible = await page.$$eval("*", (els) =>
    els.filter((e) => {
      const s = getComputedStyle(e);
      return s.opacity === "0" && e.getBoundingClientRect().height > 40;
    }).length,
  );
  report("reduced-motion: nothing stuck hidden", invisible === 0, `${invisible} elements at opacity 0`);
  report("reduced-motion: console clean", errors.length === 0, errors.slice(0, 2).join(" | "));
  await page.screenshot({ path: `${OUT}/v2-reduced-motion.png`, fullPage: true });
  await page.close();
}

await browser.close();
console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
