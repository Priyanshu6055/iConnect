const mongoose = require("mongoose");
const passport = require("passport");
const plm = require("passport-local-mongoose");
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI);

// mongoose.connect("mongodb://127.0.0.1:27017/iconnect");

const userSchema = mongoose.Schema({
  usename: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }], 
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);