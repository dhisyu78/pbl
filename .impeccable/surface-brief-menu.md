# Surface brief — seluruh situs Nina Rasa (Menu.html sebagai target utama)

## Scope & mode
Seluruh 8 halaman statis (Dashboard, Menu, Kursi, PesananSaya, Profile, Login, Register). Mode Operate: pelanggan memilih menu dan tahu persis pesanannya dalam hitungan detik.

## Audience, pekerjaan, aksi, bukti, batasan
Pelanggan di meja kedai, ponsel, satu tangan. Pekerjaan: membaca papan menu, memastikan harga dan tambahan, menandai pilihan, lalu meneruskannya lisan ke staf. Bukti: menu dan harga nyata (8 item, tagihan nol karangan), jam buka nyata (10.00–20.00), satu item habis (Es Cincau). Batasan: logo `assets/logo-nina-rasa.png` wajib, alur menu → pesanan → profil utuh, `localStorage` tetap, no build step, Bahasa Indonesia sehari-hari.

## Arah terpilih & momen berkesan
Dunia **"Kalender Kedai"** — kalender dinding cetakan kasar warung yang dijadikan papan menu: kertas jerami, tinta hampir-hitam, angka harga merah raksasa sebagai pahlawan halaman, garis cetakan tegas. Momen berkesan: item yang habis **"tercoret"** seperti tanggal yang dicoret — Es Cincau dicoret dengan goresan merah "habis", bahasa kedai sungguhan.

## Keputusan yang belum selesai
- Tidak ada. Komposisi viewport pertama terkunci pada sketsa `kalender-kedai.html`: bar hitam brand, blok tanggal, baris kategori, baris item bernomor dengan angka harga merah, keranjang lembaran di dasar.

## Direction contract

THESIS: Menu adalah papan tanggal kedai — cetakan hari yang barangkali dicoret saat habis; menolak susunan kartu-emoji komedi warung digital dan menolak dashboard putih aplikasi pesan-antar.

OWN-WORLD: Kertas jerami #f7f3e8, tinta #141210, merah cetakan #c8371f sebagai kolom harga/"hari ini", cokelat tua #8a6f4d untuk teks dukungan; garis tinta 1.5px rapi serupa mesin penggaris; display Anton untuk tanggal, angka, dan judul blok; teks Barlow; tak ada bayangan dekoratif — kedalaman datang dari kotak tinta dan blok berlawanan.

STORY: Pelanggan tahu langsung hari apa, kedai buka jam berapa, harga berapa tiap menu, mana yang habis (dicoret), dan berapa total tandanya — semua dalam sekali lihat tanpa menggulir jauh.

FIRST VIEWPORT (Menu, 390×844, sesuai sketsa terkunci): bar hitam dengan logo + "Nina Rasa / Bakso & Mie Ayam"; blok kalender memuat hari ini (dinamis JS) dan "10:00 — 20:00 hari ini" dengan angka besar; daftar kategori sebagai header strip blok BAKSO/MIE AYAM/MINUMAN di bawah lipatan pertama; baris item ber-perforasi: kolom nomor, nama tebal, angka harga merah 22px; baris "hari ini" bergaris merah; item habis dicoret; bar dasar hitam "KERANJANG <hari>" dengan total tabular dan tombol LIHAT →; pencarian dan filter kategori tepat di bawah blok tanggal.

FORM: kandidat ke-6 dari daftar 7 yang disusun (papan menu → etalase gerobak → nota karbon → enamel → label bumbu → poster koplo → kalender). SEED REFERENCE: seed:59b3d795ffe50eeb.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
