/* DPRO TAKEOUT STEP TAKEOUT-16 OWNER UNIFIED */
(() => {
  "use strict";

  const VERSION = "TAKEOUT-16-OWNER-UNIFIED-20260721";
  const path = location.pathname.split("/").pop() || "owner.html";
  const page =
    path === "owner-reception.html" ? "reception" :
    path === "owner-products.html" ? "products" :
    "owner";

  document.body.classList.add(`dpro-next-${page}`);

  const params = new URLSearchParams(location.search);
  const preview = params.get("preview") === "1";

  if (preview) {
    sessionStorage.setItem("takeout_admin_key", "1234");
    sessionStorage.setItem("takeout_ipad_admin_key", "1234");
    const input = document.getElementById("adminKeyInput");
    if (input && !input.value) input.value = "1234";
    const banner = document.getElementById("dpro-product-demo-banner");
    if (banner) banner.style.display = "block";
  }

  const header = document.querySelector(".topbar, .header");
  if (header && !document.querySelector(".dpro-next-nav")) {
    const nav = document.createElement("nav");
    nav.className = "dpro-next-nav";
    nav.setAttribute("aria-label", "DPRO NEXT管理画面ナビゲーション");
    nav.innerHTML = `
      <button type="button" data-dpro-page="owner">PC注文管理</button>
      <button type="button" data-dpro-page="ipad">厨房・レジ</button>
      <button type="button" data-dpro-page="reception">電話・店頭受付</button>
      <button type="button" data-dpro-page="products">商品管理</button>
      <button type="button" data-dpro-page="settings">店舗設定</button>
      <button type="button" class="primary" data-dpro-page="customer">お客様画面</button>
      <button type="button" class="danger" data-dpro-page="logout">終了</button>
    `;
    header.insertAdjacentElement("afterend", nav);

    const active = page === "owner" ? "owner" : page;
    nav.querySelector(`[data-dpro-page="${active}"]`)?.classList.add("active");

    nav.addEventListener("click", (event) => {
      const button = event.target.closest("[data-dpro-page]");
      if (!button) return;
      const key = button.dataset.dproPage;
      const urls = {
        owner: "./owner.html?v=takeout-16",
        ipad: "./owner-ipad.html?v=takeout-16",
        reception: "./owner-reception.html?v=takeout-16",
        products: "./owner-products.html?v=takeout-16",
        settings: "./owner-settings.html?v=takeout-16",
        customer: "./?v=takeout-16",
      };
      if (key === "logout") {
        sessionStorage.removeItem("takeout_admin_key");
        sessionStorage.removeItem("takeout_ipad_admin_key");
        const overlay = document.getElementById("loginOverlay");
        if (overlay) overlay.classList.remove("hidden");
        const input = document.getElementById("adminKeyInput");
        if (input) {
          input.value = "";
          input.focus();
        }
        return;
      }
      if (key === "customer") {
        window.open(urls[key], "_blank", "noopener");
      } else {
        location.href = urls[key];
      }
    });
  }

  const loginCard = document.querySelector(".login-card");
  if (loginCard && !document.querySelector(".dpro-clear-admin")) {
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "dpro-clear-admin";
    clear.textContent = "保存済み管理コードを削除";
    clear.addEventListener("click", () => {
      sessionStorage.removeItem("takeout_admin_key");
      sessionStorage.removeItem("takeout_ipad_admin_key");
      const input = document.getElementById("adminKeyInput");
      if (input) {
        input.value = "";
        input.focus();
      }
    });
    loginCard.appendChild(clear);
  }

  function addOwnerSourceFilter() {
    const statusTabs = document.querySelector(".status-tabs");
    const orders = document.getElementById("orders");
    if (!statusTabs || !orders || document.querySelector(".dpro-source-filter")) return;

    const bar = document.createElement("div");
    bar.className = "dpro-source-filter";
    bar.innerHTML = `
      <button type="button" class="active" data-dpro-source="all">全受付</button>
      <button type="button" data-dpro-source="line">LINE</button>
      <button type="button" data-dpro-source="phone">電話</button>
      <button type="button" data-dpro-source="counter">店頭</button>
    `;
    statusTabs.insertAdjacentElement("afterend", bar);

    let selected = "all";
    const apply = () => {
      orders.querySelectorAll(".order-card").forEach((card) => {
        const text = card.querySelector(".channel-badge")?.textContent || "";
        const source = text.includes("電話") ? "phone" : text.includes("店頭") || text.includes("店舗") ? "counter" : "line";
        card.style.display = selected === "all" || source === selected ? "" : "none";
      });
    };

    bar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-dpro-source]");
      if (!button) return;
      selected = button.dataset.dproSource;
      bar.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      apply();
    });

    new MutationObserver(apply).observe(orders, { childList: true });
    apply();
  }

  function addReceptionProductSearch() {
    const products = document.getElementById("products");
    if (!products || document.querySelector(".dpro-product-search")) return;
    const input = document.createElement("input");
    input.type = "search";
    input.className = "dpro-product-search";
    input.placeholder = "商品名・説明から絞り込み";
    products.insertAdjacentElement("beforebegin", input);

    const apply = () => {
      const query = input.value.trim().normalize("NFKC").toLowerCase();
      products.querySelectorAll(".product").forEach((card) => {
        const text = card.textContent.normalize("NFKC").toLowerCase();
        card.style.display = !query || text.includes(query) ? "" : "none";
      });
    };
    input.addEventListener("input", apply);
    new MutationObserver(apply).observe(products, { childList: true });
  }

  function addProductStatusFilter() {
    const toolbar = document.querySelector(".toolbar");
    const list = document.getElementById("productList");
    if (!toolbar || !list || document.querySelector(".dpro-product-filter")) return;

    const bar = document.createElement("div");
    bar.className = "dpro-product-filter";
    bar.innerHTML = `
      <button type="button" class="active" data-product-filter="all">すべて</button>
      <button type="button" data-product-filter="visible">表示中</button>
      <button type="button" data-product-filter="hidden">非表示</button>
      <button type="button" data-product-filter="soldout">売り切れ</button>
    `;
    toolbar.insertAdjacentElement("afterend", bar);

    let selected = "all";
    const apply = () => {
      list.querySelectorAll(".product-card").forEach((card) => {
        const hidden = card.classList.contains("hidden-product");
        const sold = (card.textContent || "").includes("売り切れ");
        const show =
          selected === "all" ||
          (selected === "visible" && !hidden) ||
          (selected === "hidden" && hidden) ||
          (selected === "soldout" && sold);
        card.style.display = show ? "" : "none";
      });
    };
    bar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-product-filter]");
      if (!button) return;
      selected = button.dataset.productFilter;
      bar.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      apply();
    });
    new MutationObserver(apply).observe(list, { childList: true });
    apply();
  }

  if (page === "owner") addOwnerSourceFilter();
  if (page === "reception") addReceptionProductSearch();
  if (page === "products") addProductStatusFilter();

  const footer = document.querySelector(".footer");
  if (footer) footer.textContent = `STEP TAKEOUT-16 / ${VERSION}`;
})();
