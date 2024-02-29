import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A user must have a firstname"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valide email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true,
    },
    profilePhoto: { type: String },
    bio: { type: String },
    role: { type: String, enum: ["doctor", "employee", "admin", "patient"] },
    associatedId: { type: mongoose.Types.ObjectId },
    contactInformation: { type: String }, // optional
    status: { type: String, enum: ["active", "inactive", "locked"] },
    twoFactorAuthenticationEnabled: { type: Boolean },
    languageSetings: { type: String, enum: ["EN", "DE"] },
    accessLog: { type: [{}] },
    passwordChangeDate: { type: Date },
    securatyQuestions: { type: [{}] },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { collection: "users", timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
