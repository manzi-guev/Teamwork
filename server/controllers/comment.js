import connec from '../db/dbconnection';
import comments from '../models/comment';
class commentController {
  static async create(req, res) {
    const { comment } = req.body;
    const newComment = await connec.query(comments.insertComment, [comment]);
    if (newComment.rowCount === 1) {
      return res.status(201).json({
        status: 201,
        message: 'comment created',
        data: newComment.rows[0]
      });
    }
  }
}
export default commentController;
