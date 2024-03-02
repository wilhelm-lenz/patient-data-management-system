import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true, "An employee must have a firstname"],
      trim: true,
      minlength: [
        2,
        "An employee firstname must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "An employee firstname must have less or equal 200 charcters",
      ],
    },
    lastname: {
      type: String,
      require: [true, "An employee must have a lastname"],
      trim: true,
      minlength: [
        2,
        "An employee lastname must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "An employee lastname must have less or equal 200 charcters",
      ],
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "non-binary"],
        message: "Gender is either: male, female, non-binary",
      },
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "nursing", "technical"],
        message: "Role is either: admin, nursing, technical",
      },
      require: [true, "An employee must have a role"],
      trim: true,
    },
    contactInformation: { type: Object },
    workingHours: { type: Object },
  },
  { collection: "employees", timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
