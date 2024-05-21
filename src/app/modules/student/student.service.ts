import { TStudent } from './student.interface';
import { Student } from './student.schema';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student);
  const student = new Student(studentData);
  // check if student already exits or not with our custom instance  method ------------->
  if(await student.isUserExits(studentData.id)){
    throw new Error('Student already exits');
  }
  // ----------------------------------------------------------------------------------//
  const result = await student.save()
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getAStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getAStudentFromDB,
};
