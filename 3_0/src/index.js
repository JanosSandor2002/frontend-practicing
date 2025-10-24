import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'first',
    title: 'firstone',
    img: './images/1.jpg',
    id: 1,
  },
  {
    author: 'second',
    title: 'secondone',
    img: './images/2.jpg',
    id: 2,
  },
  {
    author: 'third',
    title: 'thirdone',
    img: './images/3.jpg',
    id: 3,
  },
  {
    author: 'gztgm',
    title: 'jzujhga',
    img: './images/4.jpg',
    id: 4,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book;
        return (
          <Book
            img={img}
            author={author}
            title={title}
            getBook={getBook}
            id={id}
            key={id}
          ></Book>
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  return (
    <article className='book'>
      <img src={img} alt='logo' />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default BookList;
