import { Request, Response } from 'express';
import { studentServices } from './student.service';
import Joi from 'joi';

// post a data------------------------------------->
const createStudent = async (req: Request, res: Response) => {
  try {
    // create schema with joi for validation---->
    const joiValidation = Joi.object({
      id: Joi.string().required(),
      name:{
        firstName: Joi.string().max(50).min(2).required(),
        middleName: Joi.string().max(50).min(2),
        lastName: Joi.string().max(50).min(2).required()
      },
      gender: Joi.string().required().valid(['female', 'male', 'other'])
    });


    // --------------------------------------------//
    const student = req.body.student;
    // console.log(student);
    //call service.ts to send data----->
    const result = await studentServices.createStudentIntoDB(student);
    //send response for user----->
    res.status(200).json({
      success: true,
      message: 'student data created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};
// --------------------------------------------//

// find all student data------------------------------------>
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Find data successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
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
      message: 'find data successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getAStudent,
};
