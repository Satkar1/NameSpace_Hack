# 📡 FlowPilot Backend

This folder contains the backend logic for the FlowPilot productivity system.

---

## 🧩 Components

### ✅ Fluvio (Realtime Streaming)
- Publishes and consumes focus logs
- Topic: `focus-events`

**Run cluster locally:**

```bash
fluvio cluster start
fluvio topic create focus-events
