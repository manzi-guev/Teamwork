import connec from '../db/dbconnection';
import comment from '../models/comment';

const create = async () => {
  const createCommentTable = comment.createComment;
  const tables = `${createCommentTable}`;
  await connec.query(tables);
};
create();

export default create;
