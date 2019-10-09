import express from 'express';
import { signUp, signIn } from '../middleware/validation.middleware';
import userController from '../controllers/userController';

const route = express();
route.post('/api/v1/auth/signup', signUp, userController.signup);
route.post('/api/v1/auth/signin', signIn, userController.signin);
export default route;
