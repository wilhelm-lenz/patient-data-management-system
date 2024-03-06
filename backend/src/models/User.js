import bcrypt from "bcrypt";
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
    role: {
      type: String,
      enum: {
        values: ["doctor", "employee", "admin", "patient"],
        message: "Role is either: doctor, employee, admin, patient",
      },
      default: "patient",
      require: [true, "A user must have a role"],
    },
    password: {
      type: String,
      required: [true, "A user must have a password"],
      trim: true,
      minlength: [8, "A user password must have more or equal 8 charcters"],
      maxlength: [100, "A user password must have less or equal 100 charcters"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: "Password are not the same!",
      },
    },
    profilePhoto: {
      type: String,
      trim: true,
      minlength: [
        3,
        "A user profile photo must have more or equal 3 charcters",
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
    passwordChangeAt: { type: Date },
    securityQuestions: { type: [{}] },
  },
  { collection: "users", timestamps: true }
);

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changedTimestamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const User = mongoose.model("User", userSchema);

export default User;
