const supabase = require('./client');

async function writeDailySummary(userId, date, summaryText) {
  const { error } = await supabase
    .from('summaries')
    .insert([{ user_id: userId, date, summary: summaryText }]);
  if (error) console.error('Summary insert failed:', error.message);
}

module.exports = writeDailySummary;
