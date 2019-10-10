import connec from '../db/dbconnection';
import articles from '../models/articles';

const create = async () => {
  const createArticleTable = articles.createArticle;
  const tables = `${createArticleTable}`;
  await connec.query(tables);
};
create();

export default create;
