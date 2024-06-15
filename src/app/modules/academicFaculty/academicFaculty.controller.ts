import { Request } from "express";
import { createHandler } from "../../utils/controllerHandelar";
import {
  createAcademicFacultyIntoDB,
  getAcademicFacultyByIdFromDB,
  getAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
} from "./academicFaculty.service";

// post Faculty data------------------------------------->
export const createAcademicFaculty = createHandler(
  (req: any) => createAcademicFacultyIntoDB(req.body),
  "Create academic Faculty successful!",
);
// ------------------------------------------------------//
// get all Faculty data---------------------------------->
export const getAllAcademicFacultyData = createHandler(
  () => getAcademicFacultyFromDB(),
  "Get all academic Faculty data successful!",
);
// -----------------------------------------------------//
// get Faculty data by id------------------------------->
export const getAcademicFacultyDataById = createHandler(
  (req: any) => getAcademicFacultyByIdFromDB(req.params.academicFacultyId),
  "Get academic Faculty data successful!",
);
// -----------------------------------------------------//
// get Faculty data by id and update it------------------------------->
const updateAcademicFacultyDataById = async (req: Request) => {
  const { facultyId } = req.params;
  const payload = req.body;
  const result = await updateAcademicFacultyIntoDB(facultyId, payload);
  return result;
};
export const updateAcademicFaculty = createHandler(
  (req: any) => updateAcademicFacultyDataById(req),

  "Update academic Faculty data successful!",
);
// -----------------------------------------------------//
