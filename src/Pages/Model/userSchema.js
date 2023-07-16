const mongoose = require("mongoose");

const { randomFourDigitNumber } = require("../utils");



const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Mr", "Mrs", "Ms", "Dr", "others"],
  },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  selectedTheme: { type: String, enum: [] },
  jobTitle: {
    type: String,
    enum: ["student", "faculty", "industrialist"],
  },
  country: { type: String },
  uploadedAbstract: { data: Buffer, contentType: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  verificationSecret: {
    type: String,
    default: () => Math.random().toString(36).substring(2, 15),
  },
  code: {
    type: Number,
    default: randomFourDigitNumber,
    unique: true,
  },
});

module.exports = mongoose.model("User", UserSchema);