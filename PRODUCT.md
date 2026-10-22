# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pelanggan yang sedang duduk di kedai Nina Rasa. Mereka membuka situs dari ponsel di meja, sering sambil mengobrol dan menunggu, lalu memilih menu sebelum memanggil staf. Pemakaian singkat, sekali lihat, dari layar kecil. Staf memakai halaman login yang sama untuk masuk.

## Product Purpose

Menampilkan menu bakso dan mie ayam Nina Rasa beserta harga, memungkinkan pelanggan menyusun pilihan pesanan, dan menampilkan ringkasan pesanan sebelum mereka memesan ke staf. Keberhasilan berarti pelanggan menemukan menu yang diinginkan dan tahu persis apa yang akan dipesannya dalam hitungan detik.

## Positioning

Kedai bakso dan mie ayam rumahan dengan badge papan nama bergaya warung klasik dan semboyan "Rasa Pas, Bikin Nagih!". Situs ini adalah papan menu digital kedai itu, bukan aplikasi pesan-antar.

## Operating Context

Dipakai di dalam kedai, di ponsel, kadang dengan satu tangan karena tangan lain memegang anak atau tas. Layar kedai terang dan ramai. Pelanggan biasanya sudah tahu mau bakso atau mie ayam, dan memakai situs untuk memastikan pilihan, harga, dan tambahan. Pesanan diteruskan ke staf secara lisan; situs hanya membantu memilih dan mengingat.

## Capabilities and Constraints

- Situs statis: HTML, CSS, dan JavaScript tanpa build step, tanpa backend, tanpa framework.
- Data menu ditulis langsung di HTML (8 item, kategori Bakso, Mie Ayam, Minuman, Tambahan), termasuk satu item habis.
- Keranjang pesanan dan akun disimpan di `localStorage` perangkat; tidak ada pengiriman pesanan ke restoran (dinyatakan sendiri di halaman Pesanan Saya).
- Halaman Kursi menyatakan ketersediaan dan reservasi belum terhubung ke sistem.
- Halaman terproteksi: Dashboard, Menu, Kursi, Pesanan Saya; profil wajib lengkap sebelum masuk Dashboard.
- Proyek ini tugas sekolah/portofolio: data menu dan pesanan boleh bersifat demo, tetapi tampilannya harus meyakinkan sebagai kedai sungguhan.
- Batasan yang ditetapkan pengguna: logo, nama Nina Rasa, daftar menu dan harga, serta alur menu → pesanan → profil harus tetap ada; tampilan bebas dirombak.

## Brand Commitments

- Nama: Nina Rasa — Bakso & Mie Ayam.
- Logo: `assets/logo-nina-rasa.png` (badge warung klasik: maroon tua, krem, kuning emas, oranye; huruf brush "NINA RASA"; banner "BAKSO & MIE AYAM"; ikon ayam jago; semboyan "Rasa Pas, Bikin Nagih!"). Logo wajib tetap dipakai.
- Semboyan: "Rasa Pas, Bikin Nagih!".

## Evidence on Hand

- Menu dan harga nyata: Bakso Solo Campur Rp 20.000, Cilok 1 Porsi Rp 15.000, Mie Ayam Original Rp 10.000, Mie Ayam Mozarella Rp 15.000, Es Teh Rp 4.000, Es Cincau Rp 6.000 (habis), Ceker Ayam Rp 5.000, Pangsit Goreng Rp 5.000.
- Satu aset gambar saja (logo). Tidak ada foto makanan, foto kedai, testimoni, atau data penjualan; pekerjaan berikutnya tidak boleh mengarang bukti seperti itu sebagai fakta.

## Product Principles

1. Papan menu lebih dulu: pelanggan harus bisa membaca menu, harga, dan ketersediaan sebelum apa pun yang lain.
2. Satu tangan, sekali lihat: setiap keputusan penting terjangkau tanpa menggulir jauh dan tanpa ketelitian jari.
3. Jujur soal batas sistem: pesanan tersimpan di perangkat dan diteruskan ke staf, bukan dikirim otomatis.
4. Karakter kedai tetap terasa: badge dan semboyan Nina Rasa adalah identitas, bukan hiasan yang bisa ditukar.
5. Bahasa Indonesia sehari-hari, tanpa istilah sistem yang membingungkan pelanggan.

## Accessibility & Inclusion

Tidak ada standar formal yang ditetapkan. Konteks pemakaian (ponsel di meja kedai, cahaya terang, tangan sibuk) menuntut teks yang terbaca tanpa menunduk dan target sentuh yang besar.
