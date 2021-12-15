import { books, authors } from '../../libs/data.js';

import { query } from '../index.js';
const populateTables = () => {
  authors.forEach(async ({ first_name, last_name }) => {
    return await query(
      `INSERT into authors(first_name, last_name) VALUES($1, $2)`,
      [first_name, last_name]
    );
  });
  books.forEach(async ({ author_id, title, publishedDate }) => {
    console.log({ author_id, title, publishedDate });
    return await query(
      `INSERT into books(author_id, title, published_date) VALUES($1, $2, $3)`,
      [author_id, title, publishedDate]
    );
  });
  console.log('created');
};

populateTables();
