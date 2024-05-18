import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';
export const userSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String},
        lastName: { type: String, required: true },
    },
    email: { type: String, required: true },
    gender: ["female","male"],
    dateOfBirth: { type: String },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    bloodGroup: ["A+","A-","B+","B-","AB+","AB-","O+","O-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardians: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNumber: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNumber: { type: String, required: true },
    },
    localGuardians: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNumber: { type: String, required: true },
        address: { type: String, required: true },
    },
    profilePicture: { type: String },
    isActive: ["active","blocked"]

  });