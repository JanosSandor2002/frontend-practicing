import { useState } from 'react';
import { data } from '../../../data';
const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  function s(e) {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName('');
    console.log('form submitted');
  }

  function remove(id) {
    const updatedUsers = users.filter((person) => {
      return person.id !== id;
    });
    setUsers(updatedUsers);
  }

  return (
    <div>
      <form className='form' onSubmit={s}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h4 style={{ marginLeft: '300px' }}>Users</h4>
      {users.map(({ id, name }) => {
        return (
          <div key={id} style={{ marginLeft: '300px' }}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                remove(id);
              }}
              className='btn'
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
