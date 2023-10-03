const mongoose = require("mongoose");

// URI koneksi MongoDB Anda
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Terhubung ke MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Kesalahan koneksi MongoDB:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Koneksi MongoDB terputus");
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Koneksi MongoDB ditutup karena proses aplikasi berhenti");
    process.exit(0);
  });
});
module.exports = mongoose;
