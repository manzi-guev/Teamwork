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
  static viewfeeds(req, res) {
    return res.status(200).json({
      status: 200,
      message: 'success',
      data: articles
    });
  }
  static delete(req, res) {
    const id = parseInt(req.params.id, 10);
    let foundArticleIndex = articles.find(newArticle => newArticle.id === id);
    if (foundArticleIndex) {
      articles.splice(foundArticleIndex, 1);
      return res.status(200).json({
        status: 200,
        message: 'article successfully deleted'
      });
    }
    return res.status(400).json({
      status: 400,
      message: 'Article not found'
    });
  }
}

export default articleController;
