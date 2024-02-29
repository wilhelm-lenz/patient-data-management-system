import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: String, enum: ["admin", "nursing", "technical"] },
    contactInformation: { type: String },
    workingHours: { type: String },
  },
  { collection: "employees", timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
