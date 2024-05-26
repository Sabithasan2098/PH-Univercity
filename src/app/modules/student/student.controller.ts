import { RequestHandler } from "express";
import { studentServices } from "./student.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// create a higher order function to don't repeat code such as try catch block--------------------------->

const createHandler = (
  serviceFunction: Function,
  successMessage: string,
): RequestHandler => {
  return async (req, res, next) => {
    try {
      const result = await serviceFunction(req);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: successMessage,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
};

// ----------------------------------------------------------------------------------------------------//
// This are the refactor code result------------------------------------------------------------------->
// find all student data---------------------------->
const getAllStudent = createHandler(
  () => studentServices.getAllStudentFromDB(),
  "All student data fetched successful!",
);
// ------------------------------------------------//
// find a student data----------------------------->
const getAStudent = createHandler(
  (req: any) => studentServices.getAStudentFromDB(req.params.studentId),
  "Student fetched successfully",
);
// delete a student data--------------------------->
const deleteAStudent = createHandler(
  (req: any) => studentServices.deleteAStudentFromDB(req.params.studentId),
  "Delete student successfully",
);
// ----------------------------------------------//
// ----------------------------------------------------------------------------------------------------//
export const studentControllers = {
  getAllStudent,
  getAStudent,
  deleteAStudent,
};
