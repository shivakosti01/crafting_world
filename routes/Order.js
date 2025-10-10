const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect('mongodb+srv://aasijain594_db_user:UulAHQubJiTb9uK1@cluster0.dkk9xjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  product: String,
  quantity: Number,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
