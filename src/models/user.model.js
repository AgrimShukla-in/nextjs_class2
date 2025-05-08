import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false,
  },
  isAdmin : {
    type: Boolean,
    default: false,
  },
  isVerifide: {
    type: Boolean,
    default: false,
  },

  forgetPasswordToken: String,
  forgetPasswordExpiry: Date,
  verifyToken: String,
  verifyExpiry: Date,

},{timeStamp: true});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;


