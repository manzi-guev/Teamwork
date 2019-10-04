import Joi from '@hapi/joi';
import helping from '../helpers/validation.helper';


const validation = (req, res, next) => {
  const methodsSupported = ['post', 'put', 'patch'];
  const { pathing } = req.params;
  const paths = [{ path: '/api/v1/auth/signup/' }];
  const method = req.method.toLowerCase();

  const check = paths.filter(checkroute => checkroute.path === pathing);
  if (check) {
    next();
  } else {
    return res.status(400).json({
      status: 400,
      error: 'Bad request'
    });
  }
  if (methodsSupported.includes(method) !== undefined) {
    next();
  }
  return res.status(405).json({
    status: 405,
    error: 'Method not found'
  });
};

export default validation;
