import { Date, Model, Types } from "mongoose";

export type Tguardians = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type TstudentName = {
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
};
export type TlocalGuardians = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: TstudentName;
  email: string;
  gender: "male" | "female" | "other";
  dateOfBirth?: Date | undefined;
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
  guardians: Tguardians;
  localGuardians: TlocalGuardians;
  profilePicture?: string | undefined;
  admissionSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};

// create student instance method ------------------>
// export type StudentMethods = {
//   isUserExits(id:string) : Promise<TStudent | null>
// }
// export type StudentModel = Model<TStudent, Record<string,never>, StudentMethods>;

// create static method for student schema ----------------->
export interface StudentModel extends Model<TStudent> {
  existsStudent(id: string): Promise<TStudent | null>;
}
