import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import { z } from "zod";
import studentValidationSchemaZod from "./student.validation";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// find all student data------------------------------------>
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student faced is successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// ------------------------------------------------//
// find a student data----------------------------->
const getAStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getAStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student faced is successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// delete a student data----------------------------->
const deleteAStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteAStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Delete student is successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const studentControllers = {
  getAllStudent,
  getAStudent,
  deleteAStudent,
};
