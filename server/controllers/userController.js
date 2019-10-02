import users from '../models/users';
import tokengenerator from '../helpers/token.helper';

class userController {
  static signup(req, res) {
    const {
      firstname,
      lastname,
      email,
      password,
      gender,
      jobRole,
      department,
      address
    } = req.body;
    const newUser = {
      firstname,
      lastname,
      email,
      password,
      gender,
      jobRole,
      department,
      address
    };
    const check = users.find(u => u.email === email);
    if (!check) {
      users.push(newUser);
      return res.status(201).json({
        status: 201,
        token: tokengenerator(email),
        message: 'User created',
        data: newUser
      });
    } else {
      return res.status(409).json({
        status: 409,
        error: 'User already exists'
      });
    }
  }
}

export default userController;
