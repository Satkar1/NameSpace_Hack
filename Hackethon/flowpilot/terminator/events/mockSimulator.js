// terminator/events/mockSimulator.js
import { logEvent } from '../utils/logger.js';

const apps = ['chrome', 'vscode', 'terminal', 'notion'];
const events = ['tab_switch', 'focus', 'copy', 'command'];
const titles = [
  'Google Docs - Hackathon Plan',
  'FlowPilot Main Code',
  'Terminal - Running AI Module',
  'Project Notes - Important Points'
];

export function simulateEvents() {
  setInterval(() => {
    const idx = Math.floor(Math.random() * apps.length);
    const event = {
      app: apps[idx],
      event: events[idx],
      title: titles[idx]
    };
    logEvent(event.app, event.event, event.title);
  }, 8000);
}
