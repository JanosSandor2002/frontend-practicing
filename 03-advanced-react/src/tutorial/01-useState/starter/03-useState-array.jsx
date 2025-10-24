import { data } from '../../../data';
import React from 'react';
import { useState } from 'react';
const UseStateArray = () => {
  function remove(id) {
    console.log(id);
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  }
  function removeAll() {
    setPeople([0]);
  }
  const [people, setPeople] = useState(data);
  return (
    <div>
      {people.map(({ id, name }) => {
        console.log(name);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => remove(id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button className='btn' type='button' onClick={removeAll}>
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
