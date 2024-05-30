import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { Code, Month, Name } from "./academicSemester.const";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: Name,
      required: [true, "Name is required"],
    },
    code: {
      type: String,
      enum: Code,
      required: [true, "Code is required"],
    },
    year: {
      type: String,
    },
    startMonth: {
      type: String,
      enum: Month,
    },
    endMonth: {
      type: String,
      enum: Month,
    },
  },
  {
    timestamps: true,
  },
);

// checking to the collection is the same semester in one year is already create or not------------------------------>
academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("Semester is already exists");
  }
  next();
});
// ----------------------------------------------------------------------------------------------------------------->

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
