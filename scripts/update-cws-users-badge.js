const fs = require('fs');
const path = require('path');

const STORE_URL =
  'https://chromewebstore.google.com/detail/codex-quota-monitor/caohekmdjfmmmgjhacncabgfgehoemnn';
const STORE_URL_EN = `${STORE_URL}?hl=en`;
const BADGE_PATH = path.join(__dirname, '..', 'badges', 'cws-users.json');

function readPreviousCount() {
  try {
    const previous = JSON.parse(fs.readFileSync(BADGE_PATH, 'utf8'));
    const message = String(previous.message || '').replace(/[^\d]/g, '');
    return message ? Number(message) : null;
  } catch {
    return null;
  }
}

function formatCount(count) {
  return new Intl.NumberFormat('en-US').format(count);
}

function parseUsers(html) {
  const normalized = html.replace(/\s+/g, ' ');
  const match = normalized.match(/([\d,.]+)\s+users\b/i);
  if (!match) return null;
  const count = Number(match[1].replace(/[^\d]/g, ''));
  return Number.isFinite(count) ? count : null;
}

async function fetchRenderedUsers() {
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch {
    return null;
  }

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ locale: 'en-US' });
    await page.goto(STORE_URL_EN, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });
    const bodyText = await page.locator('body').innerText({ timeout: 30000 });
    return parseUsers(bodyText);
  } finally {
    await browser.close();
  }
}

async function main() {
  let parsedCount = null;

  try {
    const response = await fetch(STORE_URL_EN, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (compatible; CodexQuotaMonitorBot/1.0; +https://codexquotamonitor.github.io/)',
        'accept-language': 'en-US,en;q=0.9',
      },
    });

    if (response.ok) {
      parsedCount = parseUsers(await response.text());
    } else {
      console.warn(`Chrome Web Store returned ${response.status}`);
    }
  } catch (error) {
    console.warn(`Chrome Web Store fetch failed: ${error.message}`);
  }

  parsedCount ??= await fetchRenderedUsers();
  const previousCount = readPreviousCount();
  const count = parsedCount ?? previousCount;

  if (!count) {
    throw new Error('Could not parse Chrome Web Store user count');
  }

  const badge = {
    schemaVersion: 1,
    label: 'users',
    message: formatCount(count),
    color: 'ff9800',
  };

  fs.mkdirSync(path.dirname(BADGE_PATH), { recursive: true });
  fs.writeFileSync(BADGE_PATH, `${JSON.stringify(badge, null, 2)}\n`);
  console.log(`Updated Chrome Web Store users badge: ${badge.message}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
