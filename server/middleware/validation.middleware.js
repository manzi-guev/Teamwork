import Joi from '@hapi/joi';

const signUp = (req, res, next) => {
  const schema = {
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
  const output = Joi.validate(req.body, schema);
  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: `${output.error.details[0].message}`
    });
  }
  req.user = schema;
  next();
};
const signIn = (req, res, next) => {
  const schema = {
    email: Joi.string()
      .trim()
      .required()
      .email(),
    password: Joi.string()
      .trim()
      .required()
  };
  const output = Joi.validate(req.body, schema);
  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: `${output.error.details[0].message}`
    });
  }
  next();
};
const createArticle = (req, res, next) => {
  const schema = {
    title: Joi.string()
      .strict()
      .trim()
      .required(),
    article: Joi.string()
      .strict()
      .required()
      .trim()
  };
  const output = Joi.validate(req.body, schema);
  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: `${output.error.details[0].message}`
    });
  }
  next();
};
const createComment = (req, res, next) => {
  const schema = {
    comment: Joi.string()
      .strict()
      .trim()
      .required()
  };
  const output = Joi.validate(req.body, schema);
  if (output.error != null) {
    return res.status(400).json({
      status: 400,
      error: `${output.error.details[0].message}`
    });
  }
  next();
};
export { signUp, signIn, createArticle, createComment };
