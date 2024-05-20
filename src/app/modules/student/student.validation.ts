import Joi from 'joi';

// create schema with joi for validation---->
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/, 'alphabets')
    .messages({
      'string.pattern.name': 'First name must contain only alphabets',
      'any.required': 'First name is a required field and cannot be ignored',
      'string.min': 'First name must be at least 2 characters long ',
      'string.max': 'First name must be at most 50 characters long',
    }),
  middleName: Joi.string().max(50).trim().allow('').messages({
    'string.max': 'Middle name must be at most 50 characters long',
  }),
  lastName: Joi.string()
    .min(2)
    .max(50)
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/, 'alphabets')
    .messages({
      'string.pattern.name': 'Last name must contain only alphabets',
      'any.required': 'Last name is a required field and cannot be ignored',
      'string.min': 'Last name must be at least 2 characters long',
      'string.max': 'Last name must be at most 50 characters long',
    }),
});

// Guardian Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().min(2).max(50).trim().required().messages({
    'any.required': "Father's name is a required field and cannot be ignored",
    'string.min': "Father's name must be at least 2 characters long",
    'string.max': "Father's name must be at most 50 characters long",
  }),
  fatherOccupation: Joi.string().min(2).max(100).trim().required().messages({
    'any.required':
      "Father's occupation is a required field and cannot be ignored",
    'string.min': "Father's occupation must be at least 2 characters long",
    'string.max': "Father's occupation must be at most 100 characters long",
  }),
  fatherContactNumber: Joi.string().min(10).max(15).trim().required().messages({
    'any.required':
      "Father's contact number is a required field and cannot be ignored",
    'string.min': "Father's contact number must be at least 10 characters long",
    'string.max': "Father's contact number must be at most 15 characters long",
  }),
  motherName: Joi.string().min(2).max(50).trim().required().messages({
    'any.required': "Mother's name is a required field and cannot be ignored",
    'string.min': "Mother's name must be at least 2 characters long",
    'string.max': "Mother's name must be at most 50 characters long",
  }),
  motherOccupation: Joi.string().min(2).max(100).trim().required().messages({
    'any.required':
      "Mother's occupation is a required field and cannot be ignored",
    'string.min': "Mother's occupation must be at least 2 characters long",
    'string.max': "Mother's occupation must be at most 100 characters long",
  }),
  motherContactNumber: Joi.string().min(10).max(15).trim().required().messages({
    'any.required':
      "Mother's contact number is a required field and cannot be ignored",
    'string.min': "Mother's contact number must be at least 10 characters long",
    'string.max': "Mother's contact number must be at most 15 characters long",
  }),
});

// Local Guardian Schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().min(2).max(50).trim().required().messages({
    'any.required':
      "Local guardian's name is a required field and cannot be ignored",
    'string.min': "Local guardian's name must be at least 2 characters long",
    'string.max': "Local guardian's name must be at most 50 characters long",
  }),
  occupation: Joi.string().min(2).max(100).trim().required().messages({
    'any.required':
      "Local guardian's occupation is a required field and cannot be ignored",
    'string.min':
      "Local guardian's occupation must be at least 2 characters long",
    'string.max':
      "Local guardian's occupation must be at most 100 characters long",
  }),
  contactNumber: Joi.string().min(10).max(15).trim().required().messages({
    'any.required':
      "Local guardian's contact number is a required field and cannot be ignored",
    'string.min':
      "Local guardian's contact number must be at least 10 characters long",
    'string.max':
      "Local guardian's contact number must be at most 15 characters long",
  }),
  address: Joi.string().min(10).max(100).trim().required().messages({
    'any.required':
      "Local guardian's address is a required field and cannot be ignored",
    'string.min':
      "Local guardian's address must be at least 10 characters long",
    'string.max':
      "Local guardian's address must be at most 100 characters long",
  }),
});

// Student Schema
const studentValidationSchema = Joi.object({
  id: Joi.string().min(1).max(50).trim().required().messages({
    'any.required': 'ID is a required field and cannot be ignored',
    'string.min': 'ID must be at least 1 character long',
    'string.max': 'ID must be at most 50 characters long',
  }),
  name: userNameValidationSchema.required(),
  email: Joi.string().email().min(5).max(100).trim().required().messages({
    'string.email': '{VALUE} is not a valid email address',
    'any.required': 'Email is a required field and cannot be ignored',
    'string.min': 'Email must be at least 5 characters long',
    'string.max': 'Email must be at most 100 characters long',
  }),
  gender: Joi.string().valid('female', 'male', 'other').required().messages({
    'any.only': '{VALUE} is not supported, please provide a valid gender',
    'any.required': 'Gender is a required field and cannot be ignored',
  }),
  dateOfBirth: Joi.string().trim(),
  contactNumber: Joi.string().min(10).max(15).trim().required().messages({
    'any.required': 'Contact number is required',
    'string.min': 'Contact number must be at least 10 characters long',
    'string.max': 'Contact number must be at most 15 characters long',
  }),
  emergencyContactNumber: Joi.string()
    .min(10)
    .max(15)
    .trim()
    .required()
    .messages({
      'any.required': 'Emergency contact number is required',
      'string.min':
        'Emergency contact number must be at least 10 characters long',
      'string.max':
        'Emergency contact number must be at most 15 characters long',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .trim()
    .messages({
      'any.only':
        '{VALUE} is not supported, please provide a valid blood group',
    }),
  presentAddress: Joi.string().min(10).max(100).trim().required().messages({
    'any.required': 'Present address field is required',
    'string.min': 'Present address must be at least 10 characters long',
    'string.max': 'Present address must be at most 100 characters long',
  }),
  permanentAddress: Joi.string().min(10).max(100).trim().required().messages({
    'any.required': 'Permanent address field is required',
    'string.min': 'Permanent address must be at least 10 characters long',
    'string.max': 'Permanent address must be at most 100 characters long',
  }),
  guardians: guardianValidationSchema.required(),
  localGuardians: localGuardianValidationSchema.required(),
  profilePicture: Joi.string().trim(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .trim()
    .messages({
      'any.only': '{VALUE} is not supported, please provide a valid status',
    }),
});

export default studentValidationSchema;
