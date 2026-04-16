# 📋 Lists App

## 📖 Story

Setiap hari, user memiliki berbagai aktivitas yang perlu diselesaikan. Tidak jarang, aktivitas baru muncul di hari yang sama dan perlu segera dicatat agar tidak terlupakan.

**Lists App** hadir sebagai solusi sederhana untuk membantu user mengelola kegiatan harian dengan lebih terstruktur. User dapat mencatat aktivitas, memantau progres, hingga menandai aktivitas yang telah selesai.

Aplikasi ini dirancang dengan pendekatan minimalis: cepat, ringan, dan fokus pada kebutuhan utama sebagai pengingat aktivitas harian.

---

## 🚀 Features

### 📝 1. Register

User dapat mendaftarkan akun untuk mulai menggunakan aplikasi.

**Input:**
- `email` (string)
- `password` (string)
- `fullname` (string)

**Output:**
- `success` / `failed`

---

### 🔐 2. Login

User harus login terlebih dahulu untuk dapat mengakses dan menyimpan data kegiatannya.

**Input:**
- `email` (string)
- `password` (string)

**Output:**
- `access_token` (string)
- `refresh_token` (string)

> 🔄 `refresh_token` digunakan untuk memperbarui `access_token` ketika sudah expired.

---

### ➕ 3. Create Todo

User dapat membuat kegiatan atau *todo* baru.

**Input:**
- `description` (string)

User hanya perlu menuliskan deskripsi singkat yang mudah dipahami sebagai pengingat aktivitasnya.

---

### 📋 4. List Todo

User dapat melihat daftar kegiatan yang telah dibuat.

**Optional Input:**
- `time_start` (datetime)
- `time_end` (datetime)

Jika parameter diisi, data akan difilter berdasarkan rentang waktu.  
Jika tidak diisi, seluruh data akan ditampilkan.

---

### ✅ 5. Mark as Completed

User dapat menandai kegiatan sebagai selesai.

**Input:**
- `todo_id` (string / identifier)

---

## 🎯 Goal

Membantu user untuk:
- Tetap terorganisir
- Fokus pada prioritas
- Tidak melewatkan aktivitas penting

---

## ✨ Highlights

- Simple & minimalistic design
- Easy to use
- Focus on daily productivity