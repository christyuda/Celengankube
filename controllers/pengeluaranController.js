const Pengeluaran = require("../models/pengeluaran");
const Pengguna = require("../models/Users");

exports.getAll = async (req, res) => {
  try {
    const pengeluaran = await Pengeluaran.find();

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: pengeluaran,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan dalam mengambil catatan pengeluaran.",
    });
  }
};
// Fungsi untuk menambahkan catatan pengeluaran baru
exports.tambahPengeluaran = async (req, res) => {
  try {
    const { userId, amount, description, date } = req.body;

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

    // Buat catatan pengeluaran baru
    const pengeluaranBaru = new Pengeluaran({
      userId,
      amount,
      description,
      date,
    });
    await pengeluaranBaru.save();

    const responseData = {
      code: 201, // 201 untuk Created
      success: true,
      status: "Created",
      message: "Catatan pengeluaran berhasil ditambahkan.",
    };

    res.status(201).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan dalam menambahkan catatan pengeluaran.",
    });
  }
};

// Fungsi untuk mendapatkan semua catatan pengeluaran berdasarkan ID pengguna
exports.getPengeluaran = async (req, res) => {
  try {
    const { userId } = req.params;

    // Cari semua catatan pengeluaran berdasarkan ID pengguna
    const catatanPengeluaran = await Pengeluaran.find({ userId });

    if (!catatanPengeluaran) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan pengeluaran tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      data: catatanPengeluaran,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat mengambil catatan pengeluaran.",
    });
  }
};

// Fungsi untuk menghapus catatan pengeluaran berdasarkan ID
exports.hapusPengeluaran = async (req, res) => {
  try {
    const { pengeluaranId } = req.params;

    // Hapus catatan pengeluaran berdasarkan ID
    const hasilHapus = await Pengeluaran.findByIdAndDelete(pengeluaranId);

    if (!hasilHapus) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan pengeluaran tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      message: "Catatan pengeluaran berhasil dihapus.",
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat menghapus catatan pengeluaran.",
    });
  }
};

// Fungsi untuk memperbarui catatan pengeluaran berdasarkan ID
exports.perbaruiPengeluaran = async (req, res) => {
  try {
    const { pengeluaranId } = req.params;
    const { amount, description, date } = req.body;

    // Perbarui catatan pengeluaran berdasarkan ID
    const hasilUpdate = await Pengeluaran.findByIdAndUpdate(
      pengeluaranId,
      { amount, description, date },
      { new: true }
    );

    if (!hasilUpdate) {
      return res.status(404).json({
        code: 404,
        success: false,
        status: "Not Found",
        message: "Catatan pengeluaran tidak ditemukan.",
      });
    }

    const responseData = {
      code: 200,
      success: true,
      status: "OK",
      message: "Catatan pengeluaran berhasil diperbarui.",
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      success: false,
      status: "Internal Server Error",
      message: "Terjadi kesalahan saat memperbarui catatan pengeluaran.",
    });
  }
};
