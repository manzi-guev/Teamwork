import express from 'express';
import {
  signUp,
  signIn,
  createArticle,
  createComment
} from '../middleware/validation.middleware';
import userController from '../controllers/userController';
import articleController from '../controllers/articleController';
import commentController from '../controllers/comment';
import token from '../middleware/token.middleware';
import owner from '../middleware/owner';

const route = express();
route.post('/api/v1/auth/signup', signUp, userController.signup);
route.post('/api/v1/auth/signin', signIn, userController.signin);
route.post('/api/v1/articles', token, createArticle, articleController.create);
route.get('/api/v1/feeds', articleController.viewall);
route.get('/api/v1/articles/:id', articleController.viewarticle);
route.delete(
  '/api/v1/articles/:id',
  token,
  owner,
  articleController.deletearticle
);
route.patch('/api/v1/articles/:id', token, owner, articleController.edit);
route.post('/api/v1/comments', createComment, commentController.create);
export default route;
