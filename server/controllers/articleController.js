import articles from '../models/articles';
import connec from '../db/dbconnection';
class articleController {
  static async create(req, res) {
    const { title, author, article } = req.body;
    const newArticle = await connec.query(articles.insertArticle, [
      title,
      author,
      article
    ]);
    if (newArticle.rowCount === 1) {
      return res.status(201).json({
        status: 201,
        message: 'Article Successfully created',
        data: newArticle.rows[0]
      });
    }
  }
  static async viewall(req, res) {
    const viewArticles = await connec.query(articles.findarticles);
    if (viewArticles.rowCount >= 1) {
      return res.status(200).json({
        status: 200,
        data: viewArticles.rows
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'No articles'
    });
  }
  static async viewarticle(req, res) {
    const id = parseInt(req.params.id, 10);
    const checkarticles = await connec.query(articles.findspecific, [id]);
    if (checkarticles.rowCount === 1) {
      return res.status(200).json({
        status: 200,
        data: checkarticles.rows
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'No article with id passed found'
    });
  }
  static async deletearticle(req, res) {
    const id = parseInt(req.params.id, 10);
    const checkarticles = await connec.query(articles.deleteArticle, [id]);
    if (checkarticles.rowCount === 1) {
      return res.status(200).json({
        status: 200,
        message: 'Article deleted successfully'
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Article not found'
    });
  }
  static async edit(req, res) {
    const title = req.body.title;
    const id = parseInt(req.params.id, 10);
    const checkarticles = await connec.query(articles.updateArticle, [
      id,
      title
    ]);
    if (checkarticles.rowCount === 1) {
      return res.status(200).json({
        status: 200,
        message: 'Article updated successfully'
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Article not found'
    });
  }
}
export default articleController;
