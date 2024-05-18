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

export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  email: { type: String, required: true },
  gender: ['female', 'male'],
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardians: guardianSchema,
  localGuardians: localGuardianSchema,
  profilePicture: { type: String },
  isActive: ['active', 'blocked'],
});

// create a model------------->

export const StudentModel = model<Student>('Student', studentSchema);
