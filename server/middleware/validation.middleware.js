import Joi from '@hapi/joi';
import helping from '../helpers/validation.helper';

const validation = (req, res, next) => {
  const supportedMethod = ['post', 'put', 'patch', 'get'];
  const { path } = req.route;
  const method = req.method.toLowerCase();

  if (supportedMethod.includes(method) && helping[path] != undefined) {
    const schema = helping[path];
    return Joi.validate(req.body, schema, (error, data) => {
      if (error) {
        res.status(400).json({
          status: 400,
          message: 'Bad request'
        });
      }
      req.body = data;
      next();
    });
  } else {
    res.status(405).json({
      status: 405,
      message: 'Method not defined'
    });
  }
};
export default validation;
