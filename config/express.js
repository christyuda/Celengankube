const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk mengizinkan pengolahan data JSON
app.use(express.json());

// Middleware untuk menangani CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Menerima permintaan dari semua domain (Harap sesuaikan untuk lingkungan produksi)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Middleware otorisasi (contoh sederhana, sesuaikan sesuai kebutuhan Anda)
const authorize = (req, res, next) => {
  // Cek otorisasi di sini (misalnya, dengan token JWT)
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Tidak ada token otorisasi." });
  }
  // Verifikasi token dan lanjutkan jika valid
  // Implementasi verifikasi token harus disesuaikan dengan kebutuhan Anda
  next();
};

// Menggunakan middleware otorisasi untuk rute tertentu
app.use("/secure-route", authorize);

module.exports = { app, port };
