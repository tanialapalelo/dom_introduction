# ILT Membuat Websitemu Lebih Interaktif

## Pengantar

Studi kasus ini ditujukan untuk ILT dengan materi DOM Manipulation dan Event. Ini adalah studi kasus lanjutan dari ILT belajar membangun kerangka halaman web dengan HTML dan CSS.

Hands-on kali ini berfokus pada DOM manipulation dan interaktif elemen HTML.

## Petunjuk

Branch repository ini mengandung dua direktori yang bersifat starter dan solution project. Sebagai pembuka sesi hands-on demo, instruktur dipersilakan untuk memanfaatkan project dalam direktori `starter`.

## Hasil Akhir Proyek

Hasil akhir dari kegiatan hands-on demo akan terlihat seperti berikut.

![Calm Headphone](calm-headphones-final.png?raw=true)

## Konten Calm Music

Karena akan menampilkan calm playlist, kita perlu menentukan struktur konten HTML. Berikut adalah contoh HTML yang bisa instruktur jadikan acuan.

```html
<article class="music-list__item" data-musicid="{{AUDIO ID}}">
  <div class="card">
    <div class="card-image">
      <img id="musicImage" src="{{ART AUDIO IMAGE LINK}}" alt="{{AUDIO TITLE}}" />
    </div>
    <div class="card-body">
      <h3 id="musicTitle" class="card-body__title">{{AUDIO TITLE}}</h3>
      <div id="musicSignature" class="card-body__copyright">{{AUDIO SIGNATURE}}</div>
      <audio
        id="musicAudio"
        class="music-list__item__audio"
        controls
        src="{{AUDIO LINK}}"
        type="audio/mp3"
        preload="none"
      ></audio>
    </div>
  </div>
</article>
```

Kode styling telah kami sediakan untuk memudahkan instruktur melakukan hands-on demo. Ini dengan catatan bahwa instruktur mengikuti struktur konten di atas.

## Menjalankan Proyek (Mengatasi Error CORS saat buka langsung file://)

Pada versi ini, file `index.html` memuat JavaScript dengan `<script type="module" src="assets/scripts/script.js"></script>`. Browser akan menerapkan aturan keamanan (CORS) yang lebih ketat untuk ES Module. Jika Anda membuka file langsung (skema `file://`), import seperti `import { ... } from './utils.js';` akan diblokir sehingga muncul pesan semacam:

```
Access to script at 'file:///.../script.js' from origin 'null' has been blocked by CORS policy
```

Solusi: Jalankan lewat server HTTP lokal (bukan buka langsung). Pilih salah satu cara berikut.

### Opsi 1: Python (tersedia default di macOS / Linux)
```bash
cd dom_introduction/exercises/v2/solution
python3 -m http.server 5173
```
Buka di browser: http://localhost:5173

### Opsi 2: Node.js (tanpa instal global permanen)
Menggunakan paket `serve`:
```bash
cd dom_introduction/exercises/v2/solution
npx serve .
```
Atau menggunakan `http-server`:
```bash
cd dom_introduction/exercises/v2/solution
npx http-server -p 5173 -c-1 .
```
Lalu buka URL yang ditampilkan (misal http://127.0.0.1:5173).

### Opsi 3: VS Code Live Server Extension
1. Buka folder proyek di VS Code.
2. Klik kanan `index.html` > "Open with Live Server".

### Opsi 4: PHP (jika ada)
```bash
cd dom_introduction/exercises/v2/solution
php -S localhost:5173
```

### Jangan Menonaktifkan Keamanan Browser
Menjalankan Chrome/Brave dengan flag menonaktifkan web security hanya untuk debugging darurat dan tidak disarankan untuk latihan standar.

### Troubleshooting
- Pastikan path: Anda berada di folder `solution` saat menjalankan server.
- Reload paksa (Hard Refresh) jika perubahan JS tidak terlihat (Cache).
- Buka DevTools > Network: pastikan `script.js` dan `utils.js` status 200 (bukan (blocked:CORS) atau (failed)).
- Jika audio tidak eksklusif (lebih dari satu bisa play), cek event listener `play` di `script.js` sudah dipasang setelah elemen audio dirender.
