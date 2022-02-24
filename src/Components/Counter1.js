import React from 'react';
import useCounter from './CustomHooks/counter';
const Counter1 = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h1>{`Current count is ${count}`}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter1;
