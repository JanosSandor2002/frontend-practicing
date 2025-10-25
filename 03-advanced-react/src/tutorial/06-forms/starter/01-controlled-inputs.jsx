import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const a = (e) => {
    setName(e.target.value);
  };

  const b = (e) => {
    setEmail(e.target.value);
  };
  const c = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className='form' onSubmit={c}>
      <h4>Controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={a}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          id='email'
          className='form-input'
          value={email}
          onChange={b}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
