import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./users.model";

// find the last student----------------------------------------------------->
const findLastStudentById = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  //2030 01 0001
  return lastStudent?.id ? lastStudent.id : undefined;
};
// -------------------------------------------------------------------------//
// set a auto generated id--------------------------------------------------->

// year semester 4 digit number
export const generatedStudentId = async (payload: TAcademicSemester) => {
  // Current ID generation logic (e.g., from a database or other source)
  let currentId = (0).toString();
  // find the lastStudentId
  const lastStudentId = await findLastStudentById();
  // find the year and code
  //example: 2028 02 0001
  const lastStudentYear = lastStudentId?.substring(0, 4); //2028
  const lastStudentCode = lastStudentId?.substring(4, 6); //02
  // if the generated lastStudentId's currentSemesterCode & currentSemesterYear didn't match lastStudentYear & lastStudentCode. Then we take a action
  const currentSemesterCode = payload.code;
  const currentSemesterYear = payload.year;
  if (
    lastStudentId &&
    lastStudentYear === currentSemesterYear &&
    lastStudentCode === currentSemesterCode
  ) {
    currentId = lastStudentId.substring(6);
  }
  // Increment ID logic
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
// -------------------------------------------------------------------------//
