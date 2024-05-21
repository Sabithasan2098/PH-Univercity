import { z } from "zod";

// Define Zod schemas
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name must be at least 1 character long" })
    .max(20, { message: "First name must be at most 20 characters long" })
    .refine((value) => /^[A-Z]/.test(value), {
      message: "First name must start with a capital letter",
    }),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name must be at least 1 character long" })
    .max(20, { message: "Last name must be at most 20 characters long" }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: "Father name must not be empty" }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: "Father occupation must not be empty" }),
  fatherContactNumber: z
    .string()
    .trim()
    .min(1, { message: "Father contact number must not be empty" }),
  motherName: z.string().trim().min(1, { message: "Mother name must not be empty" }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: "Mother occupation must not be empty" }),
  motherContactNumber: z
    .string()
    .trim()
    .min(1, { message: "Mother contact number must not be empty" }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, { message: "Local guardian name must not be empty" }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: "Local guardian occupation must not be empty" }),
  contactNumber: z
    .string()
    .trim()
    .min(1, { message: "Local guardian contact number must not be empty" }),
  address: z
    .string()
    .trim()
    .min(1, { message: "Local guardian address must not be empty" }),
});

const studentValidationSchemaZod = z.object({
  id: z.string().trim().min(1, { message: "ID must not be empty" }),
  password: z.string().min(6, { message: "Password must be 6 character" }).max(20,"Password will be at most 20 characters long"),
  name: userNameValidationSchema,
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email must not be empty" }),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender must be either male, female, or other",
  }),
  dateOfBirth: z
    .string()
    .trim()
    .min(1, { message: "Date of birth must not be empty" }),
  contactNumber: z
    .string()
    .min(1, { message: "Contact number must not be empty" }),
  emergencyContactNumber: z
    .string()
    .trim()
    .min(1, { message: "Emergency contact number must not be empty" }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional()
    .default("O+"),
  presentAddress: z
    .string()
    .trim()
    .min(1, { message: "Present address must not be empty" }),
  permanentAddress: z
    .string()
    .trim()
    .min(1, { message: "Permanent address must not be empty" }),
  guardians: guardianValidationSchema,
  localGuardians: localGuardianValidationSchema,
  profilePicture: z.string().trim().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default studentValidationSchemaZod;
