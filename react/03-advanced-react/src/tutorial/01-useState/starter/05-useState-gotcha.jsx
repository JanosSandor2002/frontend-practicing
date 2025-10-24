import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  function dp() {
    setTimeout(() => {
      console.log('clicked');

      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  }
  return (
    <div>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={dp}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
