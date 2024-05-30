import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

export const createAcademicSemesterIntoDB = async (
  payLod: TAcademicSemester,
) => {
  // checking this name and code ware right to proceed------------------------------------->
  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Fall: "02",
    Summer: "03",
  };
  if (academicSemesterNameCodeMapper[payLod.name] !== payLod.code) {
    throw new Error("Invalid AcademicSemester name or code");
  }
  // --------------------------------------------------------------------------------------//
  const result = await AcademicSemesterModel.create(payLod);
  return result;
};
