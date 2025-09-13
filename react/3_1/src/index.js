import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books.js';
import Book from './Book.js';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} author={author} title={title} key={id}></Book>;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default BookList;
