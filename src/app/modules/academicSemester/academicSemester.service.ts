import { academicSemesterNameCodeMapper } from "./academicSemester.const";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

// create academicSemester----------------------------------------------------------------------------------------->
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
// ---------------------------------------------------------------------------------------------------------------//
// get all academic semester data--------------------------------------------------------------------------------->
export const getAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// get academic semester data by id-------------------------------------------------------------------------------->
export const getAcademicSemesterByIdFromDB = async (id: any) => {
  const result = await AcademicSemesterModel.findByIdAndUpdate(id);
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// update academic semester data by id-------------------------------------------------------------------------------->
export const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid Semester Code");
  }

  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};
