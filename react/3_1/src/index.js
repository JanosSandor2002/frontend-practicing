import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books.js';
import Book from './Book.js';

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          const { img, title, author, id } = book;
          return (
            <Book
              img={img}
              author={author}
              title={title}
              key={id}
              number={index}
            ></Book>
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default BookList;
