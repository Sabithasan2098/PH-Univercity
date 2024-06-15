import { z } from "zod";

export const createAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic faculty name must be string ",
    }),
  }),
});
export const updateAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic faculty name must be string ",
    }),
  }),
});
