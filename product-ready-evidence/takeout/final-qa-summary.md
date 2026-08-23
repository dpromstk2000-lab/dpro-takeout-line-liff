# DPRO TAKEOUT Product Ready Final QA

- Result: **FAIL**
- Source SHA: `00f770618d28997686af3141bd966ec53745f28c`
- Worker: `TAKEOUT-PR2-WORKER-20260823`
- Database: `TAKEOUT-DB-PR2-20260823`
- Frontend: `TAKEOUT-18-FINAL-SYSTEM-CHECK-20260722`
- Adapter: `TAKEOUT-PRODUCT-READY-ADAPTER-2.0`
- Browser checks: 0
- Public URL checks: 0
- Production 1234 guard: ADMIN_AUTH_NOT_CONFIGURED
- Forged LINE guard: unverified
- Demo prepare/reset: unverified

## Failures
- Error: HTTP 404: https://dpro-takeout-line-api.dpromstk2000.workers.dev/api/member/orders?shop_code=production_probe&line_user_id=U_FORGED_PR2_PROBE :: {
  "ok": false,
  "error": "NOT_FOUND",
  "message": "指定されたAPIが見つかりません。",
  "path": "/api/member/orders",
  "request_id": "9e14dadc-9ba6-4792-a2b3-174a4d1f136d"
}
    at fetchJson (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:50:14)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async runApiTests (file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:91:22)
    at async file:///home/runner/work/dpro-takeout-line-liff/dpro-takeout-line-liff/dpro-takeout-final-qa.mjs:252:3
