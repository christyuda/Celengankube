module.exports = {
  secretKey: "kuncirahasia", // Ganti dengan kunci rahasia Anda
  port: process.env.PORT || 3000, // Port yang akan digunakan oleh aplikasi
  env: process.env.NODE_ENV || "development", // Lingkungan aplikasi (development/production)
};
