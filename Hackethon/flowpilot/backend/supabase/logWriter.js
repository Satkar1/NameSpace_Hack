const supabase = require('./client');

async function writeLog({ timestamp, appName, focusScore, summary }) {
  const { error } = await supabase
    .from('logs')
    .insert([{ timestamp, app_name: appName, focus_score: focusScore, summary }]);
  if (error) console.error('Supabase Error:', error.message);
}

module.exports = writeLog;
