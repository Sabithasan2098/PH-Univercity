import { RequestHandler } from "express";
import { createStudentIntoDB } from "./users.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// post student data------------------------------------->
export const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;

    //middleWare dia validation kora hosse->

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
