import connec from '../db/dbconnection';
import users from '../models/users';

const create = async () => {
  const createUserTable = users.createUser;
  const tables = `${createUserTable}`;
  await connec.query(tables);
};
create();

export default create;
