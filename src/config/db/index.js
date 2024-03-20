var mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/skin_lol_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Kết nối thành công !!");
  } catch (error) {
    console.log("Kết nối thất bại !!");
  }
}

module.exports = { connect };
