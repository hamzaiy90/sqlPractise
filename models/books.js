import { query } from '../db/index.js';

export async function getBooks() {
  const { rows } = await query(`SELECT * FROM books`);
  return rows;
}

export function searchBooksByTitle(searchTerm) {
  return books.filter(function (book) {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export async function searchBooksByAuthor(searchTerm) {
  const { rows } = await query(
    `
    select * from authors
    WHERE first_name = $1 OR last_name = $2
  `,
    [searchTerm[0], searchTerm[1]]
  );

  return rows;

  // const authorNamesMatchingSearchTerm = authors.filter(function (author) {
  //   const authorName = `${author.first_name} ${author.last_name}`;
  //   return authorName.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const authorIdsMatchingSearchTerm = authorNamesMatchingSearchTerm.map(
  //   function (author) {
  //     return author.id;
  //   }
  // );

  // return books.filter(function (book) {
  //   return authorIdsMatchingSearchTerm.includes(book.author_id);
  // });
}

export function getBookById(id) {
  const found = books.find(function (book) {
    return book.id === id;
  });
  return found;
}

export function createBook(book) {
  books.push(book);
  return books[books.length - 1];
}

export function updateBookById(id, updates) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  books[foundIndex] = updates;
  return books[foundIndex];
}

export function deleteBookById(id) {
  const foundIndex = books.findIndex(function (book) {
    return book.id === id;
  });
  const item = books[foundIndex];
  books.splice(foundIndex, 1);
  return item;
}
