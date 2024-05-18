import { Schema, model, connect } from 'mongoose';

export type guardians = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type localGuardians = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};
export type Student = {
  id: string;
  name: studentName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | ' O-';
  presentAddress: string;
  permanentAddress: string;
  guardians: guardians;
  localGuardians: localGuardians;
  profilePicture: string;
  isActive: 'active' | 'blocked';
};
