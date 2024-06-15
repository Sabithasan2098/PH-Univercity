import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepertmentInterface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "academicFaculty",
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicDepartmentModel = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema,
);
