import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A user must have a username"],
      trim: true,
      minlength: [2, "A user username must have more or equal 2 charcters"],
      maxlength: [200, "A user username must have less or equal 200 charcters"],
    },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valide email"],
      trim: true,
      minlength: [6, "A user email must have more or equal 6 charcters"],
      maxlength: [200, "A user email must have less or equal 200 charcters"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true,
      minlength: [12, "A user password must have more or equal 12 charcters"],
      maxlength: [200, "A user password must have less or equal 200 charcters"],
    },
    profilePhoto: {
      type: String,
      trim: true,
      minlength: [
        3,
        "A user profile photo must have more or equal 6 charcters",
      ],
      maxlength: [
        200,
        "A user profile photo must have less or equal 200 charcters",
      ],
    },
    bio: {
      type: String,
      trim: true,
      minlength: [12, "A user bio must have more or equal 12 charcters"],
      maxlength: [200, "A user bio must have less or equal 200 charcters"],
    },
    role: {
      type: String,
      enum: {
        values: ["doctor", "employee", "admin", "patient"],
        message: "Role is either: doctor, employee, admin, patient",
      },
      require: [true, "A user must have a role"],
    },
    associatedId: { type: mongoose.Types.ObjectId },
    contactInformation: { type: Object }, // optional
    status: {
      type: String,
      enum: {
        values: ["active", "inactive", "locked"],
        message: "Status is either: active, inactive, locked",
      },
      require: [true, "A user must have a status"],
    },
    twoFactorAuthenticationEnabled: { type: Boolean },
    languageSettings: {
      type: String,
      enum: {
        values: ["EN", "DE"],
        message: "Language Settings is either: EN, DE",
      },
    },
    accessLog: { type: [{}] },
    passwordChangeDate: { type: Date },
    securatyQuestions: { type: [{}] },
  },
  { collection: "users", timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
