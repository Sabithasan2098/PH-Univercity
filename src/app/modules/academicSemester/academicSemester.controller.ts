import { Request, RequestHandler } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createHandler } from "../../utils/controllerHandelar";
import {
  createAcademicSemesterIntoDB,
  getAcademicSemesterByIdFromDB,
  getAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
} from "./academicSemester.service";

// post semester data------------------------------------->
const createAcademicSemester = createHandler(
  (req: any) => createAcademicSemesterIntoDB(req.body),
  "Create academic semester successful!",
);
// ------------------------------------------------------//
// get all semester data---------------------------------->
const getAllAcademicSemesterData = createHandler(
  () => getAcademicSemesterFromDB(),
  "Get all academic semester data successful!",
);
// -----------------------------------------------------//
// get semester data by id------------------------------->
const getAcademicSemesterDataById = createHandler(
  (req: any) => getAcademicSemesterByIdFromDB(req.params.academicSemesterId),
  "Get academic semester data successful!",
);
// -----------------------------------------------------//
// get semester data by id and update it------------------------------->
const updateAcademicSemesterDataById = async (req: Request) => {
  const { semesterId } = req.params;
  const payload = req.body;
  const result = await updateAcademicSemesterIntoDB(semesterId, payload);
  return result;
};
const updateAcademicSemester = createHandler(
  (req: any) => updateAcademicSemesterDataById(req),

  "Update academic semester data successful!",
);
// -----------------------------------------------------//

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesterData,
  getAcademicSemesterDataById,
  updateAcademicSemester,
};
