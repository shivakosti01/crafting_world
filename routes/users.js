const mongoose = require ('mongoose');
const plm = require("passport-local-mongoose");
mongoose.connect('mongodb+srv://aasijain594_db_user:UulAHQubJiTb9uK1@cluster0.dkk9xjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    // lowercase: true,
    // match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  password: {
    type: String,
   
  },
  mobile: {
    type: String,
    required: true,
    // match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"]
  }
}, { timestamps: true });

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);








