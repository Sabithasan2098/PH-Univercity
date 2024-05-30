import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

export const createAcademicSemesterIntoDB = async (
  payLod: TAcademicSemester,
) => {
  const result = await AcademicSemesterModel.create(payLod);
  return result;
};
