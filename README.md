# Romantic Personal Website - User Guide

## 📁 Struktur Folder

```
web untuk sayang ku tercinta/
├── index.html              # File utama website
├── style.css               # Styling dan tema
├── script.js               # Interaktivitas dan animasi
├── public/
│   └── assets/
│       ├── images/         # Letakkan foto-foto di sini
│       ├── music/          # Letakkan file MP3 di sini
│       └── fonts/          # Font sudah tersedia
└── README.md              # File ini
```

## 🎨 Cara Mengganti Konten

### 1. Mengganti Foto

Letakkan foto Anda di folder `public/assets/images/`, lalu edit `index.html`:

```html
<!-- Cari bagian ini di index.html -->
<img src="public/assets/images/placeholder1.jpg" alt="First contact on Telegram">

<!-- Ganti dengan nama file foto Anda -->
<img src="public/assets/images/foto-kita.jpg" alt="First contact on Telegram">
```

**Foto yang dibutuhkan:**
- `placeholder1.jpg` - Foto pertama kali bertemu di Telegram
- `placeholder2.jpg` - Foto Pony Town
- `placeholder3.jpg` - Foto kenangan lainnya
- `placeholder4.jpg` - Foto kenangan lainnya
- `ponytown-placeholder.jpg` - Screenshot Pony Town
- `cover1.jpg`, `cover2.jpg`, `cover3.jpg` - Cover album lagu

### 2. Mengganti Lagu

Letakkan file MP3 di folder `public/assets/music/`, lalu edit `index.html`:

```html
<!-- Cari bagian song-item di index.html -->
<div class="song-item" data-src="public/assets/music/song1.mp3">
    <div class="song-cover">
        <img src="public/assets/images/cover1.jpg" alt="Song 1 Cover">
    </div>
    <div class="song-info">
        <h3 class="song-title">[Judul Lagu 1]</h3>
        <p class="song-artist">[Nama Artist]</p>
    </div>
    <button class="song-play-btn">▶</button>
</div>
```

**Ganti:**
- `data-src="public/assets/music/song1.mp3"` → nama file MP3 Anda
- `[Judul Lagu 1]` → judul lagu
- `[Nama Artist]` → nama artist
- `cover1.jpg` → cover album lagu

### 3. Mengganti Teks/Caption

Edit langsung di `index.html`:

**Timeline Section:**
```html
<h3 class="memory-title">[Judul Kenangan]</h3>
<p class="memory-caption">
    [Tulis caption kenangan Anda di sini...]
</p>
```

**Pony Town Section:**
```html
<p class="ponytown-story">
    [Ceritakan kenangan Anda di Pony Town di sini...]
</p>
```

**Hidden Message:**
```html
<p class="secret-text">
    [Tulis pesan rahasia Anda di sini...]
</p>
```

### 4. Mengganti Warna Tema

Edit `style.css` di bagian `:root`:

```css
:root {
    --bg-dark: #0e0e12;           /* Warna background utama */
    --pink-accent: #ff2e88;       /* Warna pink utama */
    --pink-soft: #ff6ba8;         /* Pink lebih lembut */
    --pink-dark: #d91c6e;         /* Pink lebih gelap */
    --purple-dark: #1a0a1e;       /* Ungu gelap */
}
```

**Contoh mengganti ke warna biru:**
```css
:root {
    --bg-dark: #0e0e12;
    --pink-accent: #2e88ff;       /* Biru */
    --pink-soft: #6ba8ff;         /* Biru lembut */
    --pink-dark: #1c6ed9;         /* Biru gelap */
}
```

### 5. Mengganti Font

Font sudah tersedia di `public/assets/fonts/`:
- `Pixellari.ttf` - Font pixel untuk judul
- `Times New Romance-Italic.otf` - Font untuk surat
- `Romance.otf` - Font untuk signature

Untuk mengganti font, edit `style.css`:

```css
@font-face {
    font-family: 'Pixellari';
    src: url('public/assets/fonts/NamaFontBaru.ttf') format('truetype');
}
```

## 🚀 Cara Menjalankan Website

### Lokal (di komputer):

1. **Buka langsung di browser:**
   - Double-click file `index.html`
   - Atau klik kanan → Open with → Browser pilihan Anda

2. **Menggunakan Live Server (recommended):**
   - Install extension "Live Server" di VS Code
   - Klik kanan `index.html` → "Open with Live Server"

### Deploy ke Vercel (GRATIS):

1. **Persiapan:**
   - Buat akun di [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm install -g vercel`

2. **Deploy:**
   ```bash
   cd "d:\project\web untuk sayang ku tercinta"
   vercel
   ```

3. **Ikuti instruksi:**
   - Login dengan akun Vercel
   - Pilih "Yes" untuk setup project
   - Tekan Enter untuk default settings
   - Website akan otomatis di-deploy!

4. **Update website:**
   ```bash
   vercel --prod
   ```

## ✨ Fitur Website

### 1. Landing Page
- Background dengan dust particle halus
- Tombol "Enter Our Memories" untuk masuk
- Transisi smooth

### 2. Timeline Section
- Highlight tanggal 30 September 2024
- Mention Telegram dan Pony Town
- Foto kenangan dengan caption
- Animasi fade-up saat scroll

### 3. Pony Town Section
- Vibe pixel aesthetic
- Background retro pink
- Hover glow effect

### 4. Music Player
- Desain mirip Spotify
- Play/Pause, progress bar, time display
- Equalizer animation saat lagu dimainkan
- Auto-play lagu berikutnya

### 5. Letter Section
- Paragraf pertama dengan efek typewriter
- Paragraf kedua fade-in lembut
- Font Times New Romance-Italic

### 6. Hidden Message
- Tombol tersembunyi dengan tanda "?"
- Klik untuk reveal pesan rahasia
- Animasi glow saat muncul

### 7. Signature
- "Rikki dan Shafa" di pojok kanan bawah
- Font Romance.otf

## 🎯 Tips & Trik

### Optimasi Foto:
- Ukuran maksimal: 1920x1080px
- Format: JPG atau PNG
- Compress foto untuk loading lebih cepat: [tinypng.com](https://tinypng.com)

### Optimasi Musik:
- Format: MP3
- Bitrate: 128-192 kbps (lebih kecil, loading lebih cepat)
- Durasi: Bebas

### Responsive Design:
- Website sudah responsive untuk mobile, tablet, dan desktop
- Test di berbagai device sebelum deploy

### Performance:
- Dust particles otomatis berkurang di mobile
- Animasi pause saat tab tidak aktif
- Smooth di Vercel gratis

## 🐛 Troubleshooting

### Foto tidak muncul:
- Pastikan path benar: `public/assets/images/namafile.jpg`
- Cek nama file (case-sensitive)
- Pastikan foto ada di folder yang benar

### Lagu tidak bisa diputar:
- Pastikan format MP3
- Cek path di `data-src`
- Pastikan file tidak corrupt

### Font tidak muncul:
- Pastikan font ada di `public/assets/fonts/`
- Cek path di `@font-face` di `style.css`
- Refresh browser (Ctrl+F5)

### Website lambat:
- Compress foto dan musik
- Reduce jumlah foto jika terlalu banyak
- Test di Incognito mode

## 💝 Pesan dari Developer

Website ini dibuat dengan penuh cinta untuk Shafa. Semua placeholder sudah disediakan agar mudah diganti. Jangan ragu untuk bereksperimen dengan warna, font, dan konten!

**Selamat menikmati website romantis kalian! 🌸**

---

Made with ♡ by Rikki for Shafa
