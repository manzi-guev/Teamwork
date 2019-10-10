const createArticle = `CREATE TABLE IF NOT EXISTS articles (
    id SERIAL,
    title text,
    author text,
    article text
    )`;
const insertArticle = `INSERT INTO articles (
    title,
    author,
    article
   ) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING returning *`;
const findarticles = 'select * from articles';
const findspecific = 'select * from articles where id = $1';
const deleteArticle = 'delete from articles where id = $1';
const updateArticle = `UPDATE articles SET title = $2 where id = $1`;
export default {
  createArticle,
  insertArticle,
  findarticles,
  findspecific,
  deleteArticle,
  updateArticle
};
