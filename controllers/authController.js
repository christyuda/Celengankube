// controller/authController.js
const Pengguna = require("../models/Users");

// Fungsi untuk melakukan login
exports.login = (req, res) => {
  const { email, password } = req.body;

  Pengguna.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // Proses autentikasi berhasil
    return res.json({ message: "Login successful" });
  });
};
