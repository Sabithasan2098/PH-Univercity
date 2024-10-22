// import { TStudent } from "./student.interface";
import { Student } from "./student.schema";

const getAllStudentFromDB = async () => {
  const result = await Student.find().populate("academicSemester");
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.find({ id }).populate("academicSemester");
  return result;
};

const deleteAStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentFromDB,
  getAStudentFromDB,
  deleteAStudentFromDB,
};
