// validationMiddleware.js
const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  // Memeriksa hasil validasi dari express-validator
  const errors = validationResult(req);

  // Jika ada kesalahan validasi
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      success: false,
      status: "Bad Request",
      message: "Permintaan tidak valid. Ada kesalahan dalam data yang dikirim.",
      errors: errors.array(),
    });
  }

  // Melanjutkan ke middleware atau rute berikutnya jika tidak ada kesalahan validasi
  next();
};
