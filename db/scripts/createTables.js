import { query } from '../index.js';
console.log('got in here');
const createTables = async () => {
  const data = await query(
    `
    CREATE TABLE IF NOT EXISTS authors(
      id SERIAL PRIMARY KEY NOT NULL,
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL 
     );

    CREATE TABLE IF NOT EXISTS books(
      id SERIAL PRIMARY KEY NOT NULL, 
      author_id int, 
      title TEXT NOT NULL,
      published_date TEXT NOT NULL,
      FOREIGN KEY (author_id) REFERENCES authors(id)
     );
    `
  );
};

createTables();
