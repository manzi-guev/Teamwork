import moment from 'moment';

class commentController {
  static create(req, res) {
    const { comments } = req.body;
    const newComments = {
      comments,
      createdOn: moment().format()
    };
    comments.push(newComments);
    return res.status(201).json({
      status: 201,
      message: 'Comment Successfully created',
      data: newComments
    });
  }
}
export default commentController;
