import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true || "A employee must have a firstname"],
      trim: true,
    },
    lastname: {
      type: String,
      require: [true || "A employee must have a lastname"],
      trim: true,
    },
    gender: { type: String, enum: ["male", "female", "non-binary"] },
    role: {
      type: String,
      enum: ["admin", "nursing", "technical"],
      require: [true || "A employee must have a role"],
      trim: true,
    },
    contactInformation: { type: Object },
    workingHours: { type: Object },
  },
  { collection: "employees", timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
