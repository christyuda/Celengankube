const Pengguna = require("../models/Users");

// Fungsi untuk membuat pengguna baru
exports.getAllPengguna = async (req, res) => {
  try {
    const semuaPengguna = await Pengguna.find();
    if (!semuaPengguna) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Data pengguna tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: semuaPengguna,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat mengambil data pengguna.",
    });
  }
};
exports.buatPengguna = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Lakukan validasi data pengguna di sini (misalnya, pastikan email unik)

    // Simpan pengguna baru ke basis data
    const penggunaBaru = new Pengguna({ username, email, password });
    await penggunaBaru.save();

    const responseData = {
      code: 201, // 201 untuk Created
      success: true,
      status: "Created",
      message: "Pengguna berhasil dibuat.",
    };

    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan dalam membuat pengguna.",
    });
  }
};

// Fungsi untuk mendapatkan informasi pengguna
exports.getInfoPengguna = async (req, res) => {
  try {
    const { userId } = req.params;

    // Cari pengguna berdasarkan ID
    const pengguna = await Pengguna.findById(userId);

    if (!pengguna) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Pengguna tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: pengguna,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat mengambil informasi pengguna.",
    });
  }
};

// Fungsi untuk memperbarui informasi pengguna
exports.perbaruiInfoPengguna = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;

    // Cari dan perbarui pengguna berdasarkan ID
    const pengguna = await Pengguna.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true }
    );

    if (!pengguna) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Pengguna tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      message: "Informasi pengguna berhasil diperbarui.",
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat memperbarui informasi pengguna.",
    });
  }
};
