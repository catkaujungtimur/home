/* Tombol "home" untuk semua web Catka Ujung Timur.
   Cara pakai: tambahkan satu baris ini sebelum </body> di setiap web:
   <script src="https://catkaujungtimur.github.io/home/home-button.js"></script>
   Tombol disisipkan sebagai baris sendiri di paling atas halaman,
   jadi otomatis mendorong judul ke bawah (tidak menimpa isi web). */
(function () {
  if (window.__catkaHome) return;
  window.__catkaHome = true;
  var HOME = "https://catkaujungtimur.github.io/home/";
  if (location.href.indexOf(HOME) === 0) return; // jangan tampil di web utama

  var css = ".catka-home-bar{display:block;padding:12px 16px 0;margin:0;box-sizing:border-box}" +
    ".catka-home{display:inline-flex;align-items:center;height:38px;padding:0 14px;border-radius:11px;color:#fff;" +
    "font:700 14px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.3px;text-decoration:none;" +
    "background:linear-gradient(135deg,#1e3a8a,#2563eb);box-shadow:0 4px 16px rgba(10,25,80,.35);" +
    "transition:transform .15s,filter .15s}" +
    ".catka-home:hover{transform:translateY(-1px);filter:brightness(1.12)}" +
    "@media print{.catka-home-bar{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var bar = document.createElement("div");
  bar.className = "catka-home-bar";
  var a = document.createElement("a");
  a.className = "catka-home"; a.href = HOME; a.textContent = "home";
  a.setAttribute("aria-label", "Kembali ke beranda Catka Ujung Timur");
  bar.appendChild(a);
  document.body.insertBefore(bar, document.body.firstChild);
})();
