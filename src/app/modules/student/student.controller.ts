import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
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
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
};
