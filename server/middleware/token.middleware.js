import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
  try {
    const takeToken = req.header('token');
    if (!takeToken) {
      return res.status(401).json({
        status: 401,
        error: 'No token found'
      });
    }
    const { email } = jwt.verify(req.header('token'), process.env.KEY);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: error.message
    });
  }
  next();
};
export default checkToken;
