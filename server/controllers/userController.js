import users from '../models/users';
import tokengenerator from '../helpers/token.helper';
import bcrypt from 'bcrypt-nodejs';

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
      password: bcrypt.hashSync(password),
      gender,
      jobRole,
      department,
      address
    };
    const check = users.find(searchmail => searchmail.email === email);
    try {
      if (!check) {
        users.push(newUser);
        return res.status(201).json({
          status: 201,
          token: tokengenerator(email),
          message: 'User created',
          data: newUser
        });
      }
      return res.status(409).json({
        status: 409,
        error: 'User already exists'
      });
    } catch (err) {}
  }
  static signin(req, res) {
    try {
      const { email, password } = req.body;
      const check = users.find(searchmail => searchmail.email === email);
      const decrypt = bcrypt.compareSync(password, check.password);
      if (decrypt && check) {
        return res.status(200).json({
          status: 200,
          token: tokengenerator(email),
          message: 'User successfully logged in'
        });
      }
      return res.status(401).json({
        status: 401,
        error: 'Incorrect password'
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: 'Internal Error'
      });
    }
  }
}

export default userController;
