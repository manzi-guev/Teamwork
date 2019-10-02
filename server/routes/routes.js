import express from 'express';
import userController from '../controllers/userController';
import validation from '../middleware/validation.middleware';

const route = express();
route.post('/api/v1/auth/signup', validation, userController.signup);
route.post('/api/v1/auth/signin', validation, userController.signin);
export default route;
