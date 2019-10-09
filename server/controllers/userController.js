import tokengenerator from '../helpers/token.helper';
import bcrypt from 'bcrypt-nodejs';
import connec from '../db/dbconnection';
import users from '../models/users';

class userController {
  static async signup(req, res) {
    const {
      firstname,
      lastname,
      email,
      gender,
      jobRole,
      department,
      address
    } = req.body;
    const passwd = bcrypt.hashSync(req.body.password);
    const newUser = await connec.query(users.insertUser, [
      firstname,
      lastname,
      email,
      passwd,
      gender,
      jobRole,
      department,
      address
    ]);
    const findEmp = await connec.query(users.finduser, [email]);
    if (newUser.rowCount === 1) {
      return res.status(201).json({
        status: 201,
        token: tokengenerator(email),
        message: 'User created',
        data: findEmp.rows[0]
      });
    } else {
      res.status(409).json({
        status: 409,
        error: 'User already exists'
      });
    }
  }
  static async signin(req, res) {
    const { email } = req.body;
    const findEmp = await connec.query(users.finduser, [email]);
    if (findEmp.rowCount === 1) {
      return res.status(200).json({
        status: 200,
        token: tokengenerator(email),
        message: 'User successfully logged in'
      });
    } else {
      return res.status(401).json({
        status: 401,
        error: 'User doesnt exist'
      });
    }
  }
}
export default userController;
