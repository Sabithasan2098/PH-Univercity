import { TStudent } from "./student.interface";
import { Student } from "./student.schema";

const createStudentIntoDB = async (studentData: TStudent) => {
  // now checking with custom static method--------------------------------------------->
  if (await Student.existsStudent(studentData.id)) {
    throw new Error("Student already exits from static");
  }
  // ---------------------------------------------------------------------------------//
  const result = await Student.create(studentData);
  // const student = new Student(studentData);
  // check if student already exits or not with our custom instance  method ------------->
  // if(await student.isUserExits(studentData.id)){
  //   throw new Error('Student already exits');
  // }
  // ----------------------------------------------------------------------------------//
  // const result = await student.save()
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

// const getAStudentFromDB = async (id: string) => {
//   const result = await Student.findOne({ id });
//   return result;
// };
const getAStudentFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};

const deleteAStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getAStudentFromDB,
  deleteAStudentFromDB,
};
