import { academicSemesterNameCodeMapper } from "./academicSemester.const";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

export const createAcademicSemesterIntoDB = async (
  payLod: TAcademicSemester,
) => {
  // checking this name and code ware right to proceed------------------------------------->

  if (academicSemesterNameCodeMapper[payLod.name] !== payLod.code) {
    throw new Error("Invalid AcademicSemester name or code");
  }
  // --------------------------------------------------------------------------------------//
  const result = await AcademicSemesterModel.create(payLod);
  return result;
};
