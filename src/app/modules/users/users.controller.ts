import { NextFunction, Request, Response } from "express";
import { userValidationSchema } from "./users.validation";
import { createStudentIntoDB } from "./users.service";

// post student data------------------------------------->
export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    //

    // parse zod validation data------------------------------->
    // const zodValidationData = userValidationSchema.parse(user);

    //call service.ts to send data----->
    const result = await createStudentIntoDB(password, student);

    // -----------------------------------//

    //send response for user----->
    res.status(200).json({
      success: true,
      message: "student data created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// --------------------------------------------//
