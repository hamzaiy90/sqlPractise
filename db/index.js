import pg from 'pg';

console.log('pg', pg);

const pool = new pg.Pool({
  // user: 'newuser',
  // host: 'localhost',
  // database: 'postgres',
  // password: 'password',
  // port: process.env.PORT ||,
  connectionString: process.env.DATABSE_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

export function query(text, params) {
  return pool.query(text, params);
}
