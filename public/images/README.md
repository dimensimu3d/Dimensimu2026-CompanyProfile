# Asset foto produk

Tempatkan foto produk asli di folder `public/images/products/`.

Rekomendasi:
- format WebP atau AVIF untuk foto final
- rasio 4:3 atau 1:1 agar konsisten dengan kartu katalog
- nama file sederhana, misalnya `mechanical-keyboard-fidget.webp`

Isi field `image` pada `src/data/siteData.js` dengan path seperti `/images/products/mechanical-keyboard-fidget.webp`.

Komponen katalog sudah mendukung lazy-loading, decoding async, shimmer loading, dan fallback otomatis ke ilustrasi CSS jika file foto gagal dimuat.
