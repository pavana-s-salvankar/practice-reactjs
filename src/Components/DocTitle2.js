import React , { useState }  from 'react';

import useDocTitle from './CustomHooks/UseDocTitle';
const DocTitle2 = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return <button onClick={() => setCount(count + 1)}>{`Count ${count}`}</button>;
};
export default DocTitle2;
