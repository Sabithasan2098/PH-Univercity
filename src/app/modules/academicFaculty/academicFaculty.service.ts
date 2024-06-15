import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";

// create academicFaculty----------------------------------------------------------------------------------------->
export const createAcademicFacultyIntoDB = async (payLod: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payLod);
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// get all academic faculty data--------------------------------------------------------------------------------->
export const getAcademicFacultyFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// get academic faculty data by id-------------------------------------------------------------------------------->
export const getAcademicFacultyByIdFromDB = async (id: any) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// update academic faculty data by id----------------------------------------------------------------------------->
export const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};
