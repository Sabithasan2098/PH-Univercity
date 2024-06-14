import config from "../../config";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.schema";
import { TUser } from "./users.interface";
import { UserModel } from "./users.model";
import { generatedStudentId } from "./utils";

export const createStudentIntoDB = async (
  password: string,
  payload: TStudent,
) => {
  // create a object for user-------------------------------------------------->
  const userData: Partial<TUser> = {};
  // if password didn't give , use default password---------------------------->
  userData.password = password || (config.default_pass as string);
  // create role for student--------------------------------------------------->
  userData.role = "student";
  // set a auto generated id--------------------------------------------------->

  // find the admissionSemester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  // set the generated id
  if (!admissionSemester) {
    throw new Error("Create admissionSemester first");
  } else {
    userData.id = await generatedStudentId(admissionSemester);
  }
  // -------------------------------------------------------------------------//
  // create NewUser------------------------------------------------------------>
  const NewUser = await UserModel.create(userData);
  // Now time to create a student when find the user length-------------------->
  if (Object.keys(NewUser).length) {
    // embed id & referencing _id---------------------------------------------->
    payload.id = NewUser.id; //<---embed id
    payload.user = NewUser._id; //<----reference id
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};
