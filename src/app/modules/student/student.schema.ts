import { Schema, model } from "mongoose";
import {
  TStudent,
  Tguardians,
  TlocalGuardians,
  StudentModel,
  TstudentName,
} from "./student.interface";
import { date } from "zod";

const userNameSchema = new Schema<TstudentName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
});

const guardianSchema = new Schema<Tguardians>({
  fatherName: {
    type: String,
    required: [true, "Father name is required"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father occupation is required"],
    trim: true,
  },
  fatherContactNumber: {
    type: String,
    required: [true, "Father contact number is required"],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "Mother name is required"],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
    trim: true,
  },
  motherContactNumber: {
    type: String,
    required: [true, "Mother contact number is required"],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TlocalGuardians>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
    trim: true,
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
});

// original schema------------------------------------------------------>
// using studentModel and studentMethod in student schema to create instance method----------------->
export const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      unique: true,
      required: [true, "Id is required"],
      trim: true,
    },
    // give a connection between student and userModel\student is model------------------------->
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "UserModel",
    },
    // ----------------------------------------------------------------------------------------//
    name: {
      type: userNameSchema,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    gender: {
      type: String,
      enum: ["female", "male", "other"],
      required: [true, "Gender is required"],
      trim: true,
    },
    dateOfBirth: { type: Date, trim: true },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true,
    },
    emergencyContactNumber: {
      type: String,
      required: [true, "Emergency contact number is required"],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      trim: true,
    },
    presentAddress: {
      type: String,
      required: [true, "Present address is required"],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent address is required"],
      trim: true,
    },
    guardians: {
      type: guardianSchema,
      required: [true, "Guardians is required"],
    },
    localGuardians: {
      type: localGuardianSchema,
      required: [true, "Local guardians is required"],
    },
    profilePicture: { type: String, trim: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);
// -------------------------------------------------------------//
// create a virtual data------------------------->
studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
//don't show data which isDeleted field is true----------------------------->
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
// don't show also in aggregated data sync system---->
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
// -----------------------------------------------------------------------//
// check user exits or not using static method------------------>
studentSchema.statics.existsStudent = async function (id: string) {
  const exitingUser = await Student.findOne({ id });
  return exitingUser;
};
// create model--------------------------------------------------->
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
