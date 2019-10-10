import verifier from '../helpers/tokenverifier';
import find from '../models/articles';
import connec from '../db/dbconnection';

const access = async (req, res, next) => {
  const email = verifier(req.header('token'));
  const id = parseInt(req.params.id, 10);
  const findarticle = await connec.query(find.findspecific, [id]);
  if (findarticle.rowCount !== 1) {
    return res.status(404).json({
      status: 404,
      error: 'Article not found'
    });
  }
  const author = await connec.query(find.findauthor, [email]);
  if (!author.rowCount) {
    return res.status(403).json({
      status: 403,
      error: 'You are not the owner'
    });
  }
  next();
};

export default access;
