import { Request, Response } from "express";
import { studentServices } from "./student.service";
import { z } from "zod";
import studentValidationSchemaZod from "./student.validation";

// find all student data------------------------------------>
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Find data successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};
// ------------------------------------------------//
// find a student data----------------------------->
const getAStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getAStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "find data successful",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};
// delete a student data----------------------------->
const deleteAStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteAStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "student data successful",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};

export const studentControllers = {
  // createStudent,
  getAllStudent,
  getAStudent,
  deleteAStudent,
};
