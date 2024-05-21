import { Schema, model } from "mongoose";
import {
  TStudent,
  Tguardians,
  TlocalGuardians,
  StudentModel,
  TstudentName,
} from "./student.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userNameSchema = new Schema<TstudentName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
});

const guardianSchema = new Schema<Tguardians>({
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
    trim: true,
  },
  fatherContactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  motherName: {
    type: String,
    required: true,
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: true,
    trim: true,
  },
  motherContactNumber: {
    type: String,
    required: true,
    trim: true,
  },
});

const localGuardianSchema = new Schema<TlocalGuardians>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  occupation: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

// original schema------------------------------------------------------>
// using studentModel and studentMethod in student schema to create instance method----------------->
export const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["female", "male", "other"],
    required: true,
    trim: true,
  },
  dateOfBirth: { type: String, trim: true },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    trim: true,
  },
  presentAddress: {
    type: String,
    required: true,
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: true,
    trim: true,
  },
  guardians: {
    type: guardianSchema,
    required: true,
  },
  localGuardians: {
    type: localGuardianSchema,
    required: true,
  },
  profilePicture: { type: String, trim: true },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
    trim: true,
  },
});
// -------------------------------------------------------------//
// create mongoose hook-------------------------------------------->
// pre save hook || middleware------->
studentSchema.pre("save", async function (next) {
  //  hashing password before save into database---->
  this.password = await bcrypt.hash(this.password, Number(config.bcryptSalt));

  next();
});
// post save hook || middleware------>
// don't show the password---------------->
studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
// -------------------------------------------------------------//
// check user exits or not using instance method----------------->
// studentSchema.methods.isUserExits = async function(id:string){
// const exitingUser = await Student.findOne({id});
// return exitingUser;
// }
// ------------------------------------------------------------//
// check user exits or not using static method------------------>
studentSchema.statics.existsStudent = async function (id: string) {
  const exitingUser = await Student.findOne({ id });
  return exitingUser;
};
// create model--------------------------------------------------->
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
