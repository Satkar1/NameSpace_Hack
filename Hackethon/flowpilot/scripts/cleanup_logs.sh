#!/bin/bash

LOG_DIR="../terminator/data/logs"

echo "🧹 Starting cleanup of logs older than 24 hours..."

find "$LOG_DIR" -type f -mmin +1440 -print -delete
find "$LOG_DIR" -type d -empty -delete

echo "✅ Cleanup complete."
