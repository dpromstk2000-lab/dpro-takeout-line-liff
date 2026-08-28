/**
 * DPRO テイクアウト・モバイルオーダー LINE
 * PRODUCT READY PR2 共通設定
 * 1234 は takeout_demo 専用。Production 管理credentialはブラウザへ埋め込まない。
 */
window.DPRO_TAKEOUT_CONFIG = Object.freeze({
  VERSION: "TAKEOUT-18-FINAL-SYSTEM-CHECK-20260722",
  SHOP_CODE: "takeout_demo",
  API_BASE_URL: "https://dpro-takeout-line-api.dpromstk2000.workers.dev",
  GITHUB_PAGES_BASE_URL: "https://dpromstk2000-lab.github.io/dpro-takeout-line-liff",
  DEMO_ADMIN_KEY: "1234",
  LIFF_ID: "",
  LINE_CUSTOMER_BINDING: "deferred_until_contract",
  TIMEZONE: "Asia/Tokyo",
  SLOT_MINUTES: 30,
  PRODUCT_IMAGE_MAX_BYTES: 1048576,
});

/* DPRO TUTORIAL TAKEOUT R3 / STANDARD V1.1
 * Loaded only for explicit preview/embed_demo/tutorial routes.
 * Production business screens remain unchanged when these flags are absent.
 */
(() => {
  const q = new URLSearchParams(location.search);
  const tutorialSafeMode =
    q.get("preview") === "1" ||
    q.get("embed_demo") === "1" ||
    q.get("tutorial") === "1";
  if (!tutorialSafeMode) return;
  if (document.querySelector('script[data-dpro-tutorial-takeout]')) return;

  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "./dpro-tutorial-takeout.css?v=r3-v1.1-20260828";
  css.dataset.dproTutorialTakeout = "style";
  document.head.appendChild(css);

  const js = document.createElement("script");
  js.src = "./dpro-tutorial-takeout.js?v=r3-v1.1-20260828";
  js.defer = true;
  js.dataset.dproTutorialTakeout = "runtime";
  document.head.appendChild(js);
})();
