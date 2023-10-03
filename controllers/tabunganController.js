const Tabungan = require("../models/Tabungan");
const Pengguna = require("../models/Users");

exports.getAll = async (req, res) => {
  try {
    const tabungan = await Tabungan.find();

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: tabungan,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan dalam mengambil catatan tabungan.",
    });
  }
};

// Fungsi untuk menambahkan catatan tabungan baru
exports.tambahTabungan = async (req, res) => {
  try {
    const { userId, amount, date, description } = req.body;

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

    // Buat catatan tabungan baru
    const tabunganBaru = new Tabungan({ userId, amount, date, description });
    await tabunganBaru.save();

    const responseData = {
      code: 201, // 201 untuk Created
      success: true,
      status: "Created",
      message: "Catatan tabungan berhasil ditambahkan.",
    };

    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan dalam menambahkan catatan tabungan.",
    });
  }
};

// Fungsi untuk mendapatkan semua catatan tabungan berdasarkan ID pengguna
exports.getTabungan = async (req, res) => {
  try {
    const { userId } = req.params;

    // Cari semua catatan tabungan berdasarkan ID pengguna
    const catatanTabungan = await Tabungan.find({ userId });

    if (!catatanTabungan) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan tabungan tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: catatanTabungan,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat mengambil catatan tabungan.",
    });
  }
};

// Fungsi untuk menghapus catatan tabungan berdasarkan ID
exports.hapusTabungan = async (req, res) => {
  try {
    const { tabunganId } = req.params;

    // Hapus catatan tabungan berdasarkan ID
    const hasilHapus = await Tabungan.findByIdAndDelete(tabunganId);

    if (!hasilHapus) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan tabungan tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      message: "Catatan tabungan berhasil dihapus.",
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat menghapus catatan tabungan.",
    });
  }
};

// Fungsi untuk memperbarui catatan tabungan berdasarkan ID
exports.perbaruiTabungan = async (req, res) => {
  try {
    const { tabunganId } = req.params;
    const { amount, date, description } = req.body;

    // Perbarui catatan tabungan berdasarkan ID
    const hasilUpdate = await Tabungan.findByIdAndUpdate(
      tabunganId,
      { amount, date, description },
      { new: true }
    );

    if (!hasilUpdate) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan tabungan tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      message: "Catatan tabungan berhasil diperbarui.",
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat memperbarui catatan tabungan.",
    });
  }
};
