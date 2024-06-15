import { AcademicDepartmentModel } from "./academicDepertment.model";
import { TAcademicDepartment } from "./academicDepertmentInterface";

// create academicDepartment----------------------------------------------------------------------------------------->
export const createAcademicDepartmentIntoDB = async (
  payLod: TAcademicDepartment,
) => {
  const result = await AcademicDepartmentModel.create(payLod);
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// get all academic Department data--------------------------------------------------------------------------------->
export const getAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartmentModel.find();
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// get academic Department data by id-------------------------------------------------------------------------------->
export const getAcademicDepartmentByIdFromDB = async (id: any) => {
  const result = await AcademicDepartmentModel.findById(id);
  return result;
};
// ---------------------------------------------------------------------------------------------------------------//
// update academic Department data by id----------------------------------------------------------------------------->
export const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
