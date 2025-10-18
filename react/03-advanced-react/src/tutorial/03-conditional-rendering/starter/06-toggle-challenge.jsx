import { useState } from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(0);

  function toggle() {
    if (value) {
      setValue(0);
    } else {
      setValue(1);
    }
  }
  return (
    <div>
      <button className='btn' onClick={toggle}>
        Click me
      </button>
      {value ? <Aldi /> : <div></div>}
    </div>
  );
};

function Aldi() {
  return <div className='alert alert-danger'>hello world</div>;
}
export default ToggleChallenge;
