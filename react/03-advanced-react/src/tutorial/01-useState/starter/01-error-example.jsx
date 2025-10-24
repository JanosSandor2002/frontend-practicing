const ErrorExample = () => {
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button className='btn' onClick={increase}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
