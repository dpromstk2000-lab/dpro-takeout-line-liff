# DPRO TAKEOUT Product Ready Final QA

- Result: **FAIL**
- Source SHA: `a2520343c7927d1935461895674b909314c72189`
- Worker: `TAKEOUT-PR2-WORKER-20260823`
- Database: `TAKEOUT-DB-PR2-20260823`
- Frontend: `TAKEOUT-18-FINAL-SYSTEM-CHECK-20260722`
- Adapter: `TAKEOUT-PRODUCT-READY-ADAPTER-2.0`
- Browser checks: 0
- Public URL checks: 0
- Production 1234 guard: ADMIN_AUTH_NOT_CONFIGURED
- Forged LINE guard: LINE_ID_TOKEN_REQUIRED
- Demo prepare/reset: unverified

## Failures
- Error: HTTP 201: https://dpro-takeout-line-api.dpromstk2000.workers.dev/api/admin/demo-prepare?shop_code=takeout_demo&admin_key=1234 :: {
  "ok": true,
  "orders": [
    {
      "status": "received",
      "demo_key": "takeout11:order:20260824:01",
      "order_id": "15df28b5-2e19-4ceb-9095-7379988dd969",
      "pickup_date": "2026-08-24",
      "pickup_time": "11:00",
      "order_n
    at fetchJson (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:50:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async runApiTests (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:126:18)
    at async file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:267:3
