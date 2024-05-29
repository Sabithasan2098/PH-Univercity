import { RequestHandler } from "express";
import { AnyZodObject } from "zod";

// zod validation system use as a middleware--------------------------------->
const validationRequest = (validation: AnyZodObject): RequestHandler => {
  return async (req, res, next) => {
    try {
      await validation.parseAsync({ body: req.body });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validationRequest;
