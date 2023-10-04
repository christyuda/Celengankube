const express = require("express");
const mongoose = require("mongoose");
const { app, port } = require("./config/express");
require("dotenv").config();

// Import rute-rute aplikasi
const penggunaRoutes = require("./routes/penggunaRoutes");
const tabunganRoutes = require("./routes/tabunganRoutes");
const pengeluaranRoutes = require("./routes/pengeluaranRoutes");
const authRoutes = require("./routes/authRoutes"); // Import rute login

// Menghubungkan ke MongoDB menggunakan URI koneksi Anda
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Terhubung ke MongoDB");
  })
  .catch((err) => {
    console.error("Kesalahan koneksi MongoDB:", err);
  });

// Middleware untuk mengizinkan pengolahan data JSON
app.use(express.json());

// Menggunakan rute-rute aplikasi
app.use("/api/pengguna", penggunaRoutes);
app.use("/api/tabungan", tabunganRoutes);
app.use("/api/pengeluaran", pengeluaranRoutes);
app.use("/api/auth", authRoutes);
// Rute beranda
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Selamat datang di Aplikasi Celenganku</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <h1>Selamat datang di Aplikasi Celenganku!</h1>
      <p>Ini adalah backend untuk aplikasi pencatatan tabungan dan pengeluaran duit.</p>
    </body>
    </html>
  `);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
