import React from 'react';
import withCounter from './withCounterHoc';
const ClickCounter = ({ count, increment, name }) => {
  return <button onClick={increment}>{`${name} clicked ${count} times`}</button>;
};
export default withCounter(ClickCounter, 5);
