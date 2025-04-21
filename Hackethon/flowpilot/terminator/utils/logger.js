// terminator/utils/logger.js
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import dayjs from 'dayjs';
import { captureScreenshot } from '../capture/screenshot.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function logEvent(app, eventType, title) {
  const date = dayjs().format('YYYY-MM-DD');
  const logDir = path.join(__dirname, '../data/logs', date);
  const logFile = path.join(logDir, `${date}.json`);

  await fs.ensureDir(logDir);

  const timestamp = new Date().toISOString();
  const screenshotPath = path.join(logDir, `${Date.now()}.png`);
  await captureScreenshot(screenshotPath);

  const logEntry = {
    timestamp,
    app,
    event: eventType,
    title,
    screenshot: screenshotPath
  };

  let logs = [];
  if (fs.existsSync(logFile)) {
    logs = await fs.readJSON(logFile);
  }
  logs.push(logEntry);

  await fs.writeJSON(logFile, logs, { spaces: 2 });
  console.log(`[LOGGED] ${app} | ${eventType} | ${title}`);
}
