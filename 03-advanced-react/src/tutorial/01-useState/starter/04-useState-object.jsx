import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });

  function dp() {
    //setPerson({ name: 'john', age: 28, hobby: 'Scream at the computer' });
    //setPerson('shake');
    //setPerson({ name: 'jaahn'});
    setPerson({ ...person, name: 'jaahn' });
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className='btn' onClick={dp}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
