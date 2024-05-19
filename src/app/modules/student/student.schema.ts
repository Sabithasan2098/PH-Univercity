import { Schema, model } from 'mongoose';
import {
  Student,
  guardians,
  localGuardians,
  studentName,
} from './student.interface';

const userNameSchema = new Schema<studentName>({
  firstName: { 
    type: String, 
    required: [true, "First name is a required field and cannot be ignored"], 
    minlength: [2, "First name must be at least 2 characters long"],
    maxlength: [50, "First name must be at most 50 characters long"],
    trim: true
  },
  middleName: { 
    type: String,
    maxlength: [50, "Middle name must be at most 50 characters long"],
    trim: true
  },
  lastName: { 
    type: String, 
    required: [true, "Last name is a required field and cannot be ignored"], 
    minlength: [2, "Last name must be at least 2 characters long"],
    maxlength: [50, "Last name must be at most 50 characters long"],
    trim: true
  },
});

const guardianSchema = new Schema<guardians>({
  fatherName: { 
    type: String, 
    required: [true, "Father's name is a required field and cannot be ignored"],
    minlength: [2, "Father's name must be at least 2 characters long"],
    maxlength: [50, "Father's name must be at most 50 characters long"],
    trim: true
  },
  fatherOccupation: { 
    type: String, 
    required: [true, "Father's occupation is a required field and cannot be ignored"],
    minlength: [2, "Father's occupation must be at least 2 characters long"],
    maxlength: [100, "Father's occupation must be at most 100 characters long"],
    trim: true
  },
  fatherContactNumber: { 
    type: String, 
    required: [true, "Father's contact number is a required field and cannot be ignored"],
    minlength: [10, "Father's contact number must be at least 10 characters long"],
    maxlength: [15, "Father's contact number must be at most 15 characters long"],
    trim: true
  },
  motherName: { 
    type: String, 
    required: [true, "Mother's name is a required field and cannot be ignored"],
    minlength: [2, "Mother's name must be at least 2 characters long"],
    maxlength: [50, "Mother's name must be at most 50 characters long"],
    trim: true
  },
  motherOccupation: { 
    type: String, 
    required: [true, "Mother's occupation is a required field and cannot be ignored"],
    minlength: [2, "Mother's occupation must be at least 2 characters long"],
    maxlength: [100, "Mother's occupation must be at most 100 characters long"],
    trim: true
  },
  motherContactNumber: { 
    type: String, 
    required: [true, "Mother's contact number is a required field and cannot be ignored"],
    minlength: [10, "Mother's contact number must be at least 10 characters long"],
    maxlength: [15, "Mother's contact number must be at most 15 characters long"],
    trim: true
  },
});

const localGuardianSchema = new Schema<localGuardians>({
  name: { 
    type: String, 
    required: [true, "Local guardian's name is a required field and cannot be ignored"],
    minlength: [2, "Local guardian's name must be at least 2 characters long"],
    maxlength: [50, "Local guardian's name must be at most 50 characters long"],
    trim: true
  },
  occupation: { 
    type: String, 
    required: [true, "Local guardian's occupation is a required field and cannot be ignored"],
    minlength: [2, "Local guardian's occupation must be at least 2 characters long"],
    maxlength: [100, "Local guardian's occupation must be at most 100 characters long"],
    trim: true
  },
  contactNumber: { 
    type: String, 
    required: [true, "Local guardian's contact number is a required field and cannot be ignored"],
    minlength: [10, "Local guardian's contact number must be at least 10 characters long"],
    maxlength: [15, "Local guardian's contact number must be at most 15 characters long"],
    trim: true
  },
  address: { 
    type: String, 
    required: [true, "Local guardian's address is a required field and cannot be ignored"],
    minlength: [10, "Local guardian's address must be at least 10 characters long"],
    maxlength: [100, "Local guardian's address must be at most 100 characters long"],
    trim: true
  },
});

// Add min and max length validation to fields
export const studentSchema = new Schema<Student>({
  id: { 
    type: String, 
    unique: true, 
    required: [true, "ID is a required field and cannot be ignored"],
    minlength: [1, "ID must be at least 1 character long"],
    maxlength: [50, "ID must be at most 50 characters long"],
    trim: true
  },
  name: { 
    type: userNameSchema, 
    required: true 
  },
  email: { 
    type: String, 
    required: [true, "Email is a required field and cannot be ignored"],
    minlength: [5, "Email must be at least 5 characters long"],
    maxlength: [100, "Email must be at most 100 characters long"],
    trim: true
  },
  gender: {
    type: String,
    enum: {
      values: ['female', 'male'],
      message: "{VALUE} is not supported, please provide a valid gender"
    },
    required: true,
    trim: true
  },
  dateOfBirth: { type: String,trim: true },
  contactNumber: { 
    type: String, 
    required: [true, "Contact number is required"],
    minlength: [10, "Contact number must be at least 10 characters long"],
    maxlength: [15, "Contact number must be at most 15 characters long"],
    trim: true
  },
  emergencyContactNumber: { 
    type: String, 
    required: [true, "Emergency contact number is required"],
    minlength: [10, "Emergency contact number must be at least 10 characters long"],
    maxlength: [15, "Emergency contact number must be at most 15 characters long"],
    trim: true
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: "{VALUE} is not supported, please provide a valid blood group"
    },
    trim: true
  },
  presentAddress: { 
    type: String, 
    required: [true, "Present address field is required"],
    minlength: [10, "Present address must be at least 10 characters long"],
    maxlength: [100, "Present address must be at most 100 characters long"],
    trim: true
  },
  permanentAddress: { 
    type: String, 
    required: [true, "Permanent address field is required"],
    minlength: [10, "Permanent address must be at least 10 characters long"],
    maxlength: [100, "Permanent address must be at most 100 characters long"],
    trim: true
  },
  guardians: { 
    type: guardianSchema, 
    required: true 
  },
  localGuardians: { 
    type: localGuardianSchema, 
    required: true 
  },
  profilePicture: { type: String,trim: true },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: "{VALUE} is not supported, please provide a valid status"
    },
    default: 'active',
    trim: true
  },
});

// Create a model
export const StudentModel = model<Student>('Student', studentSchema);
