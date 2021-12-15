import pg from 'pg';

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  // user: 'newuser',
  // host: 'localhost',
  // database: 'postgres',
  // password: 'password',
  // port: process.env.PORT ||,
  // connectionString: process.env.DATABSE_URI,
  // ssl: {
  //   rejectUnauthorized: true,
  // },
});

console.log('pg', pg);
export function query(text, params) {
  return pool.query(text, params);
}
