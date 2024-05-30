import { RequestHandler } from "express";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createHandler } from "../../utils/controllerHandelar";
import { createAcademicSemesterIntoDB } from "./academicSemester.service";

// post student data------------------------------------->
const createAcademicSemester = createHandler(
  (req: any) => createAcademicSemesterIntoDB(req.body),
  "Create academic semester successful!",
);
// --------------------------------------------//

export const academicSemesterController = {
  createAcademicSemester,
};
