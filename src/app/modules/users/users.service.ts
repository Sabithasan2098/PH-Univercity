import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.schema";
import { TUser } from "./users.interface";
import { UserModel } from "./users.model";

export const createStudentIntoDB = async (
  password: string,
  studentData: TStudent,
) => {
  // create a object for user-------------------------------------------------->
  const userData: Partial<TUser> = {};
  // if password didn't give , use default password---------------------------->
  userData.password = password || (config.default_pass as string);
  // create role for student--------------------------------------------------->
  userData.role = "student";
  // set a manual generated id------------------------------------------------->
  userData.id = "20300525";
  // create NewUser------------------------------------------------------------>
  const NewUser = await UserModel.create(userData);
  // Now time to create a student when find the user length-------------------->
  if (Object.keys(NewUser).length) {
    // embed id & referencing _id---------------------------------------------->
    studentData.id = NewUser.id; //<---embed id
    studentData.user = NewUser._id; //<----reference id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};
