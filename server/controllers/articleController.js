import articles from '../models/articles';
import moment from 'moment';

class articleController {
  static create(req, res) {
    const { title, author, article } = req.body;
    const newArticle = {
      id: articles.length + 1,
      title,
      author,
      article,
      createdOn: moment().format()
    };
    articles.push(newArticle);
    return res.status(201).json({
      status: 201,
      message: 'Article Successfully created',
      data: newArticle
    });
  }
}

export default articleController;
