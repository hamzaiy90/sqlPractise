import pg from 'pg';

const pool = new pg.Pool({
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_DATABASE,
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log('pg', pg);
export function query(text, params) {
  return pool.query(text, params);
}
