import React from 'react';
import withCounter from './withCounterHoc';
const HoverCounter = ({ count, increment }) => {
  return <button onMouseOver={increment}>{`You hovered ${count} times`}</button>;
};
export default withCounter(HoverCounter, 2);
