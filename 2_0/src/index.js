import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'jam',
    title: 'jamjam',
    img: './images/1.jpg',
    id: 1,
  },
  {
    author: 'gasam',
    title: 'jamjamga',
    img: './images/2.jpg',
    id: 2,
  },
  {
    author: 'gdfam',
    title: 'jamjhgmga',
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

const FormMaker = () => {
  return (
    <form
      name='formm'
      onSubmit={(e) => {
        e.preventDefault();
        console.log('form submitted');
      }}
    >
      <h2>Typical form layout</h2>
      <input
        type='text'
        onChange={(e) => {
          console.log(e);
        }}
      />
      <button type='submit'>Submit</button>
      <div>
        <button
          type='button'
          onClick={(e) => {
            console.log(e);
          }}
        >
          Click Me
        </button>
      </div>
    </form>
  );
};

const BookList = () => {
  return (
    <section className='booklist'>
      <FormMaker />
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} author={author} title={title} key={id}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt='logo' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default BookList;
