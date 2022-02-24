import { useState } from 'react';

const withCounter = (WrappedComponent, incBy) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + incBy);
    };
    return <WrappedComponent {...props} count={count} increment={increment} />;
  };
  return WithCounter;
};
export default withCounter;
