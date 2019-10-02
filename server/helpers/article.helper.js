import Joi from '@hapi/joi';

const createArticle = {
  title: Joi.strict()
    .trim()
    .string()
    .required()
    .min(5),
  author: Joi.strict()
    .trim()
    .string()
    .required()
    .min(5),
  article: Joi.strict()
    .trim()
    .string()
    .required()
    .min(5)
};
export default {
  '/api/v1/articles': createArticle
};
