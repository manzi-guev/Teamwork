import Joi from '@hapi/joi';

const signup = {
  firstname: Joi.string()
    .strict()
    .trim()
    .required(),
  lastname: Joi.string()
    .strict()
    .trim()
    .required(),
  email: Joi.string()
    .strict()
    .trim()
    .required()
    .email(),
  password: Joi.string()
    .strict()
    .required()
    .trim()
    .min(5),
  gender: Joi.string()
    .strict()
    .trim()
    .required(),
  jobRole: Joi.string()
    .strict()
    .trim()
    .required(),
  department: Joi.string()
    .strict()
    .trim()
    .required(),
  address: Joi.string()
    .strict()
    .trim()
    .required()
};
const signin = {
  email: Joi.string()
    .strict()
    .trim()
    .required()
    .email(),
  password: Joi.string()
    .strict()
    .trim()
    .required()
    .min(5)
};
export default {
  '/api/v1/auth/signup': signup,
  '/api/v1/auth/signin': signin
};
