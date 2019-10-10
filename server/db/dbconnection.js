import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool;
if (process.env.NODE_ENV === 'TEST') {
  pool = new Pool({
    connectionString: process.env.DBURLTEST
  });
}
pool = new Pool({
  connectionString: process.env.DBURL
});

export default pool;
