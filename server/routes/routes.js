import express from 'express';
import userController from '../controllers/userController';
import validation from '../middleware/validation.middleware';
import validatetoken from '../middleware/token.middleware';
import articleController from '../controllers/articleController';

const route = express();
route.post('/api/v1/auth/signup', validation, userController.signup);
route.post('/api/v1/auth/signin', validation, userController.signin);
route.post('/api/v1/articles', articleController.create);
export default route;
