---
name: Nina Rasa
description: Papan menu digital kedai bakso & mie ayam dalam dunia visual "Kalender Kedai"
colors:
  paper: "#f7f3e8"
  paper-hi: "#fdfbf4"
  ink: "#141210"
  red: "#c8371f"
  brown: "#6d5537"
  disabled-border: "#b8a98c"
  hover-ink: "#2e2722"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontWeight: 800
    letterSpacing: "0.18em"
    textTransform: uppercase
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "14px"
  lg: "22px"
  xl: "30px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
  button-quantity:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "34px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 14px"
  chip-choice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
---

# Design System: Nina Rasa

## Overview

**Creative North Star: "Kalender Kedai"**

Seluruh situs Nina Rasa dibangun sebagai **lembar kalender duduk kedai**: dicetak di kertas jerami, dengan angka tanggal hari ini raksasa di pojok, menu tersusun dalam sel-sel tergaris seperti petak tanggal papan dinding, dan harga di-stamp merah besar seperti cap catatan kasir warung. Kertas selalu terang — situs dipakai siang hari di kedai, dari ponsel, sering di bawah cahaya terang sambil duduk santai.

Tidak ada bayangan, tidak ada sudut lengkung, tidak ada gradien. Kedalaman dibangun oleh garis cetakan saja: hairline 1px untuk pemisah isi, dan garis 1.5px yang melebar jadi 5px di bibir bawah panel — seperti lipatan kertas yang lebih gelap di bagian yang terlipat. Gerak hanya satu momen berbicara per halaman (goresan coretan pada item habis; lingkar putaran pada andalan), selebihnya sistem ini diam dan tegas.

**Key Characteristics:**
- Kertas jerami terang (`#f7f3e8`) sebagai dasar seluruh layar, tanpa mode gelap.
- Anton sebagai stamp angka & tanggal, Barlow tebal sebagai tinta isi.
- Sel tergaris hairline penuh; tak ada sudut melengkung, tak ada mode gelap.
- Harga selalu Anton merah `var(--red)` — tidak pernah berpindah ke warna lain.

## Colors

Palet lima warna datar dan hangat tanpa abu-abu — semua teks sekunder diambil dari cokelat (`--brown`), bukan kelabu netral.

### Primary
- **Merah Stamp** (`#c8371f`): harga, fokus input, angka kuantitas, band andalan. Satu-satunya warna yang diperuntukkan bagi yang penting.

### Secondary
- **Cokelat Warung** (`#6d5537`): deskripsi menu, label kategori, teks sekunder, nomor urut. Mengambil semua peran yang biasanya diisi kelabu netral.

### Tertiary
- **Gold Disabled** (`#b8a98c`): hanya border tombol kuantitas yang mati. Tak pernah untuk teks aktif.

### Neutral
- **Kertas Jerami** (`#f7f3e8`): dasar seluruh layar.
- **Kertas Tulis** (`#fdfbf4`): panel muda (topbar atas, tombol kuantitas, kartu profil), sedikit lebih terang dari dasar untuk memberi rasa kertas tertumpuk.
- **Tinta Hitam** (`#141210`): teks utama, border, tombol solid, tab nav.
- **Cokelat Gelap Hover** (`#2e2722`): state hover tombol tinta.

### Named Rules
**The Red Price Rule.** Merah hanya boleh: harga, angka kuantitas, fokus input, gagal simpan, band andalan. Ia tak boleh untuk aksen dekoratif mana pun — kemunculannya adalah informasi, bukan ornamen.

**The No Gray Rule.** Teks sekunder tidak pernah kelabu netral; selalu `var(--brown)`, ditarik hangat ke warna kertas.

## Typography

**Display Font:** Anton (self-hosted, fallback "Arial Narrow" lalu sans). Dipakai untuk angka & nama besar — tanggal, harga, kuantitas, nomor urut menu.
**Body Font:** Barlow (self-hosted, fallback Arial). Dipakai untuk seluruh teks kalimat dan label.

**Character:** Anton yang sempit dan tinggi memberi rasa angka dicap; Barlow tebal menyeimbangkannya agar kalimat tetap enak dibaca di layar kecil. Dua font saling melengkapi: satu bicara angka, satu bicara kalimat.

### Hierarchy
- **Display** (Anton 400, clamp 40–88px, lh 1.05): tanggal hari ini, hero nama hari, harga besar di band.
- **Headline** (Anton 400, 21–23px, lh 1.1): harga item, nomor urut.
- **Title** (Barlow 700–800, 17.5px, lh 1.2, letter-spacing −0.01em): nama item, judul panel.
- **Body** (Barlow 500–600, 13–16px, lh 1.5): deskripsi, penjelasan, pesan sistem.
- **Label** (Barlow 700–800, 10.5–11px, letter-spacing 0.18em, uppercase): kategori, kicker, lencana aktif.

### Named Rules
**The Stamp Rule.** Angka selalu Anton — harga, kuantitas, nomor urut, tanggal. Bila perlu menampilkan angka, gunakan stamp Anton (merah atau tinta), bukan angka dalam Barlow body.

## Layout

Seluruh konten hidup di dalam satu lembar `.sheet` (padding 22px 16px 96px; di ≥760px menjadi 30px 24px) di atas kertas dasar. Susunan dirancang untuk ponsel dulu: satu kolom, target sentuh ≥42–48px, dan bar nota keranjang menempel di dasar layar.

- **Kolom:** menu tak memakai kartu; tiap item adalah `.dish` — sel dengan pemisah hairline bawah selebar lembar.
- **Breakpoints:** hanya 2 — `min-width: 760px` (melebar, profil jadi dua kolom) dan `max-width: 420px` (merapatkan tanggal agar angka raksasanya tetap muat).
- **Ritme:** gap 8–12px di dalam grup; pemisah antar-grup adalah ruang 16–30px atau garis, tak pernah bayangan.

## Elevation & Depth

**Datar (flat). Sistem ini tidak memakai `box-shadow` sama sekali** — nilai `none` bahkan tercantum eksplisit di CSS. Kedalaman dibangun oleh satu alat garis:

### Shadow Vocabulary
- Tidak ada. Seinstitusinya: `border-bottom-width: 5px` pada panel (bibir lipat), `var(--hairline)` 1px pada pemisah, `var(--tap-line)` 1.5px pada kontrol aktif.

### Named Rules
**The Flat Ledger Rule.** Tidak ada halo, gradasi, atau bayangan — kertas datar adalah bagian dari dunia. Satu-satunya rasa kedalaman adalah border bawah yang tebal 5px.

## Shapes

Semua sudut tajam: tidak ada `border-radius` di mana pun. Garis digambar dengan `--hairline` (1px) untuk pemisah isi, `--tap-line` (1.5px) untuk kontrol aktif (tombol, pilihan), dan sisi bawah panel yang tebal **5px** sebagai tanda bibir lipat kertas. Bahasa seluruhnya cetak: sama-pinggir, sama tepi, garis menolak melengkung.

## Components

### Buttons
- **Shape:** persegi tajam, radius 0.
- **Primary** (`.block-button`): latar `var(--ink)`, teks `var(--paper)`; hover berubah jadi `#2e2722`.
- **Kuantitas** (`.quantity-button`): kotak 34px, kertas tulis + border tinta; hover berbalik tinta penuh — latar `var(--ink)`, teks `var(--paper)`.
- **Disabled:** border `#b8a98c`, teks `#6d5537`, kursor not-allowed.
- **Focus-visible:** outline merah 3px, bukan glow.

### Chips (choice-row)
- **Style:** border `var(--tap-line)`, background kertas, teks Barlow 700 14px.
- **State:** radio asli berwarna `accent-color: var(--red)` — tanpa tanda tambahan bila tidak dipilih.

### Cards / Containers
- **Corner Style:** tajam, radius 0.
- **Border:** `var(--tap-line)`; **bibir bawah 5px** untuk panel.
- **Background:** `var(--paper-hi)`, diletakkan di atas kertas dasar.
- **Shadow Strategy:** tidak ada — lihat Flat Ledger Rule.
- **Internal Padding:** 18–26px.

### Inputs / Fields
- **Style:** border `var(--tap-line)`, background kertas, min-height 48px.
- **Focus:** border berubah merah, outline dihapus.
- **Error:** teks status berubah `var(--red)`; daftar galat ditampilkan sebagai blok teks.

### Topbar / Navigation
- Bar atas memakai kertas tulis bersama logo badge; nav utama ber-garis bawah hairline; tab aktif bertepi bawah tinta tebal.
- Di ponsel muncul bar nota keranjang selebar layar di dasar, terpisah hairline, dengan total harga Anton merah.

### Signature: Item Menu (`.dish`)
Satu item = satu sel kalender. Nomor urut kecil cokelat di kiri (Anton 21px), nama & deskripsi di tengah, harga stamp merah di kanan (Anton 23px). Item habis diberi goresan coret animasi `::after` melintang melalui nama; kuantitasnya hilang dan tombolnya mati. Ini tanda tangan dunia: terbaca kenali dengan sekali lirik.

### Signature: Kartu Andalan (`.picksheet`)
Band merah besar `var(--red)` isi teks kertas, nama andalan stamp besar dilingkari goresan putar animasi (SVG, dashoffset animasi), tombol tinta di bawah sebagai arah ke Menu. Lingkar SVG di-layer di belakang teks (`z-index: -1`) — hiasan yang tidak mencuri kontras teks.

## Do's and Don'ts

### Do:
- **Do** biarkan harga merah menjadi jangkar: maksud halaman terbaca sekali lirik.
- **Do** ganti semua peran kelabu sekunder dengan cokelat `var(--brown)`.
- **Do** pertahankan target sentuh besar: min-height 42–48px di setiap kontrol; halaman dipakai dengan satu tangan.
- **Do** pertahankan font self-host (`assets/fonts/`) — situs dipakai di kedai tanpa jaminan internet; aset wajib hidup tanpa internet.

### Don't:
- **Don't** menambahkan `box-shadow`, `border-radius`, gradasi, atau elemen mode gelap — kertas datar adalah kontrak dunia.
- **Don't** memakai merah sebagai hiasan; ia milik harga, angka, fokus, gagal simpan, dan band andalan.
- **Don't** menulis teks sekunder dengan kelabu netral.
- **Don't** menempatkan SVG dekoratif di atas teks — letakkan di lapisan belakang (`z-index: -1`) sehingga kontras teks tetap terukur.
