import { books, authors } from '../../libs/data.js';

import { query } from '../index.js';
const populateTables = async () => {
  // authors.forEach(async ({ first_name, last_name }) => {
  //   return await query(
  //     `INSERT into authors(first_name, last_name) VALUES($1, $2)`,
  //     [first_name, last_name]
  //   );
  // });
  await query('DROP TABLE authors, books;');
  // books.forEach(async ({ author_id, title, publishedDate }) => {
  //   console.log({ author_id, title, publishedDate });
  //   return await query(
  //     `INSERT into books(author_id, title, published_date) VALUES($1, $2, $3)`,
  //     [author_id, title, publishedDate]
  //   );
  // });
  console.log('created');
};

populateTables();
