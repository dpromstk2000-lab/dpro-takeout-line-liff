# DPRO TAKEOUT Product Ready Final QA

- Result: **FAIL**
- Source SHA: `e10bac233090a1ffddc8ae5500108c9cac0622bd`
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
- Error: HTTP 400: https://dpro-takeout-line-api.dpromstk2000.workers.dev/api/admin/demo-prepare?shop_code=takeout_demo&admin_key=1234 :: {
  "ok": false,
  "error": "SUPABASE_REQUEST_FAILED",
  "message": "duplicate key value violates unique constraint \"takeout_customers_shop_phone_unique\"",
  "detail": "duplicate key value violates unique constraint \"takeout_customers_shop_phone_u
    at fetchJson (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:50:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async runApiTests (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:126:18)
    at async file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:267:3
