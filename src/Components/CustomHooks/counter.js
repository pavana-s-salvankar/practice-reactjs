import { useState } from 'react';
const useCounter = (initValue = 0, value = 1) => {
  const [count, setCount] = useState(initValue);
  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    setCount(count - value);
  };
  const reset = () => {
    setCount(initValue);
  };
  return [count, increment, decrement, reset];
};
export default useCounter;
