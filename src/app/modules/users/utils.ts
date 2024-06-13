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

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// set a auto generated id--------------------------------------------------->

// year semester 4 digit number
export const generatedStudentId = async (payload: TAcademicSemester) => {
  // Current ID generation logic (e.g., from a database or other source)
  const currentId = (await findLastStudentById()) || (0).toString();
  // Increment ID logic
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
