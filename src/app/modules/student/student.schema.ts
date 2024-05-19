import { Schema, model } from 'mongoose';
import {
  Student,
  guardians,
  localGuardians,
  studentName,
} from './student.interface';

const userNameSchema = new Schema<studentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<guardians>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});
const localGuardianSchema = new Schema<localGuardians>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

// fix the enum and type issue------------->
export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    type: userNameSchema,
    required: true,
  },
  email: { type: String, required: true },
  gender: {
    type: String,
    enum: ['female', 'male'],
    required: true,
  },
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardians: {
    type: guardianSchema,
    required: true,
  },
  localGuardians: {
    type: localGuardianSchema,
    required: true,
  },
  profilePicture: { type: String },
  isActive:{
    type: String,
    enum:['active','inactive'],
    default:'active'
  },
});

// create a model------------->

export const StudentModel = model<Student>('Student', studentSchema);
