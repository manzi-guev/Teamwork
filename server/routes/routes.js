import express from 'express';
import {
  signUp,
  signIn,
  createArticle
} from '../middleware/validation.middleware';
import userController from '../controllers/userController';
import articleController from '../controllers/articleController';

const route = express();
route.post('/api/v1/auth/signup', signUp, userController.signup);
route.post('/api/v1/auth/signin', signIn, userController.signin);
route.post('/api/v1/articles', createArticle, articleController.create);
route.get('/api/v1/feeds', articleController.viewall);
route.get('/api/v1/articles/:id', articleController.viewarticle);
route.delete('/api/v1/articles/:id', articleController.deletearticle);
route.patch('/api/v1/articles/:id', articleController.edit);
export default route;
