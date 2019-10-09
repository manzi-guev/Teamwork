import connec from '../db/dbconnection';
const dropTables = async () => {
  await connec.query('delete from users');
};
dropTables();
export default dropTables;
