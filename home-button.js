/* Tombol "home" untuk semua web Catka Ujung Timur.
   Cara pakai: tambahkan satu baris ini sebelum </body> di setiap web:
   <script src="https://catkaujungtimur.github.io/home/home-button.js"></script>
   Untuk mengubah tampilan/link, cukup edit file ini sekali (di repo "home"). */
(function () {
  if (window.__catkaHome) return;
  window.__catkaHome = true;
  var HOME = "https://catkaujungtimur.github.io/home/";
  if (location.href.indexOf(HOME) === 0) return; // jangan tampil di web utama

  var css = ".catka-home{position:fixed;top:12px;left:12px;z-index:2147483000;height:38px;padding:0 14px;" +
    "display:inline-flex;align-items:center;border-radius:11px;color:#fff;font:700 14px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;" +
    "letter-spacing:.3px;text-decoration:none;background:linear-gradient(135deg,#1e3a8a,#2563eb);" +
    "box-shadow:0 4px 16px rgba(10,25,80,.35);transition:transform .15s,filter .15s}" +
    ".catka-home:hover{transform:translateY(-1px);filter:brightness(1.12)}" +
    "@media print{.catka-home{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var a = document.createElement("a");
  a.className = "catka-home"; a.href = HOME; a.textContent = "home";
  a.setAttribute("aria-label", "Kembali ke beranda Catka Ujung Timur");
  document.body.appendChild(a);
})();
