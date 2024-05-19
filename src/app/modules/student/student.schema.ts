import { Schema, model } from 'mongoose';
import {
  Student,
  guardians,
  localGuardians,
  studentName,
} from './student.interface';

const userNameSchema = new Schema<studentName>({
  firstName: { type: String, required: [true,"its a required field you can not ignore it"] },
  middleName: { type: String },
  lastName: { type: String, required: [true,"its a required field you can not ignore it"] },
});

const guardianSchema = new Schema<guardians>({
  fatherName: { type: String, required: [true,"its a required field you can not ignore it"] },
  fatherOccupation: { type: String, required: [true,"its a required field you can not ignore it"] },
  fatherContactNumber: { type: String, required: [true,"its a required field you can not ignore it"] },
  motherName: { type: String, required: [true,"its a required field you can not ignore it"] },
  motherOccupation: { type: String, required: [true,"its a required field you can not ignore it"] },
  motherContactNumber: { type: String, required: [true,"its a required field you can not ignore it"] },
});
const localGuardianSchema = new Schema<localGuardians>({
  name: { type: String, required: [true,"its a required field you can not ignore it"] },
  occupation: { type: String, required: [true,"its a required field you can not ignore it"] },
  contactNumber: { type: String, required: [true,"its a required field you can not ignore it"] },
  address: { type: String, required: [true,"its a required field you can not ignore it"] },
});
// create custom error message for required fields------------->
export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    enum: {
      values: ['firstName', 'middleName', 'lastName'],
      message: "The name field is only flowing: firstName,middleName, lastName "
    },
    required: true,
  },
  email: { type: String, required: [true,"its a required field you can not ignore it"] },
  gender: {
    type: String,
    enum: {
     values: ['female', 'male'],
      message:"{VALUE} is not supported, please provide"
    },
    required: true,
  },
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: [true , "contact number is required"]},
  emergencyContactNumber: { type: String, required:[true, "emergency contact number is required"]},
  bloodGroup: {
    type: String,
    enum: {
     values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:"{VALUE} is not supported, please provide"
    }
  },
  presentAddress: { type: String, required: [true,"present address field is required"] },
  permanentAddress: { type: String, required: [true,"permanent address field is required"] },
  guardians: {
    enum: {
      values: ['fatherName', 'fatherOccupation', 'fatherContactNumber', 'motherName', 'motherOccupation', 'motherContactNumber'],
      message: "The guardians field is only flowing: fatherName, fatherOccupation, fatherContactNumber, motherName, motherOccupation, motherContactNumber"
    },
    required: true,
  },
  localGuardians: {
    enum: {
      values: ['name', 'occupation', 'contactNumber', 'address'],
      message: "The localGuardians field is only flowing: name, occupation, contactNumber, address"
    },
    required: true,
  },
  profilePicture: { type: String },
  isActive:{
    type: String,
    enum:{
      values:['active','blocked'],
      message:"{VALUE} is not supported, please provide"
    },
    default:'active'
  },
});

// create a model------------->

export const StudentModel = model<Student>('Student', studentSchema);
