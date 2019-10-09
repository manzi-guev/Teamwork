const createUser = `CREATE TABLE IF NOT EXISTS users (
    firstname text,
    lastname text,
    email text UNIQUE,
    password text,
    gender text,
    jobRole text,
    department text,
    address text
    )`;
const insertUser = `INSERT INTO users (
    firstname,
    lastname,
    email,
    password,
    gender,
    jobRole,
    department,
    address
) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) ON CONFLICT DO NOTHING returning *`;
const finduser = 'select * from users where email = ($1)';
const findpassword = 'select * from users where password = ($1)';
export default { createUser, insertUser, finduser, findpassword };
