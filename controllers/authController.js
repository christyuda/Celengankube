// controller/authController.js
const Pengguna = require("../models/Users");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Pengguna.findOne({ email, password }).exec();

    if (!user) {
      return res.status(401).json({
        code: 401,
        success: false,
        status: "Unauthorized",
        error: "Unauthorized",
        message: "Unauthorized",
      });
    }

    // Proses autentikasi berhasil
    return res.json({
      code: 200,
      success: true,
      status: "OK",
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    console.error("Kesalahan dalam proses login:", error);
    return res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      error: "Internal Server Error",
      message: "Internal Server Error",
    });
  }
};
