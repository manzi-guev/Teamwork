import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();
const authentication = (req, res, next) => {
  const { token } = req.header;
  jwt.verify(token, process.env.KEY, (error, data) => {
    if (error) {
      return res.status(403).json({
        status: 403,
        message: 'Authentication failed'
      });
    }
    req.user = data;
    next();
  });
};
export default authentication;
