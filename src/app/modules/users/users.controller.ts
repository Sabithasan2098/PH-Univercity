import { NextFunction, Request, RequestHandler, Response } from "express";
import { userValidationSchema } from "./users.validation";
import { createStudentIntoDB } from "./users.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// post student data------------------------------------->
export const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;

    //

    // parse zod validation data------------------------------->
    // const zodValidationData = userValidationSchema.parse(user);

    //call service.ts to send data----->
    const result = await createStudentIntoDB(password, student);

    // -----------------------------------//

    //send response for user----->
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Create student is successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
// --------------------------------------------//
