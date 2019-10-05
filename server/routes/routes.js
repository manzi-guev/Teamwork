import express from 'express';
import userController from '../controllers/userController';
import {
  signUp,
  signIn,
  createArticle,
  createComment
} from '../middleware/validation.middleware';
import articleController from '../controllers/articleController';
import commentController from '../controllers/commentController';

const route = express();
route.post('/api/v1/auth/signup', signUp, userController.signup);
route.post('/api/v1/auth/signin', signIn, userController.signin);
route.post('/api/v1/articles', createArticle, articleController.create);
route.get('/api/v1/feeds', articleController.viewfeeds);
route.delete('/api/v1/articles/:id', articleController.delete);
route.get('/api/v1/articles/:id', articleController.viewSpecificArticle);
route.post('/api/v1/comments', createComment, commentController.create);
export default route;
