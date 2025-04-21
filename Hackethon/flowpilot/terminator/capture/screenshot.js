// terminator/capture/screenshot.js
import screenshot from 'screenshot-desktop';

export async function captureScreenshot(filePath) {
  try {
    await screenshot({ filename: filePath });
  } catch (err) {
    console.error("Screenshot failed:", err.message);
  }
}
