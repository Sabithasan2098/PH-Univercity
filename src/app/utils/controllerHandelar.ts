import { Request, RequestHandler } from "express";
import httpStatus from "http-status";
import { sendResponse } from "./sendResponse";

//create a higher order function to don't repeat code such as try catch block--------------------------->

// Define the type of the service function
type ServiceFunction<T> = (req: Request) => Promise<T>;

export const createHandler = <T>(
  serviceFunction: ServiceFunction<T>,
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
