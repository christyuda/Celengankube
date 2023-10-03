// authMiddleware.js
const jwt = require("jsonwebtoken");
const config = require("../config/config"); // Gantilah dengan file konfigurasi Anda

module.exports = (req, res, next) => {
  // Mendapatkan token dari header permintaan
  const token = req.header("x-auth-token");

  // Memeriksa apakah token ada
  if (!token) {
    return res.status(401).json({
      code: 401,
      success: false,
      status: "Unauthorized",
      message: "Akses ditolak. Token tidak ditemukan.",
    });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, config.jwtSecret); // Gantilah dengan secret key Anda

    // Menyimpan ID pengguna yang terverifikasi pada objek permintaan
    req.userId = decoded.userId;

    // Melanjutkan ke middleware atau rute berikutnya
    next();
  } catch (error) {
    return res.status(401).json({
      code: 401,
      success: false,
      status: "Unauthorized",
      message: "Token tidak valid.",
    });
  }
};
