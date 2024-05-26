import { Request, Response } from "express";
import { userValidationSchema } from "./users.validation";
import { createStudentIntoDB } from "./users.service";

// post student data------------------------------------->
export const createStudent = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};
// --------------------------------------------//
