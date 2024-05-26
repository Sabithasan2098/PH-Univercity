import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import { z } from "zod";
import studentValidationSchemaZod from "./student.validation";

// find all student data------------------------------------>
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Find data successfully",
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
    res.status(200).json({
      success: true,
      message: "find data successful",
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
    res.status(200).json({
      success: true,
      message: "student data successful",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const studentControllers = {
  // createStudent,
  getAllStudent,
  getAStudent,
  deleteAStudent,
};
