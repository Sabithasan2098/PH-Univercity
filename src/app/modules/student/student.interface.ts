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
  middleName?: string | undefined;
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
  gender: "male" | "female" | "other";
  dateOfBirth?: string | undefined;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?:
    | "A+"
    | "A-"
    | "B+"
    | "B-"
    | "AB+"
    | "AB-"
    | "O+"
    | "O-"
    | undefined;
  presentAddress: string;
  permanentAddress: string;
  guardians: guardians;
  localGuardians: localGuardians;
  profilePicture?: string | undefined;
  isActive: "active" | "blocked";
};
