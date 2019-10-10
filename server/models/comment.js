const createComment = `CREATE TABLE IF NOT EXISTS comments (
    id SERIAL,
    comment text
    )`;
const insertComment = `INSERT INTO comments (
    comment
   ) VALUES ($1) ON CONFLICT DO NOTHING returning *`;
export default { createComment, insertComment };
