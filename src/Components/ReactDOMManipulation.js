import React, { useRef, useState } from 'react';
import '../Styles/reactdom.scss';
const Comp = () => {
  const nameInput = useRef();
  const [isCircle, setIsCircle] = useState(true);
  const clearInput = () => {
    nameInput.current.value = '';
  };
  return (
    <>
      <div className='flexRow'>
        <div className={isCircle ? 'circle' : 'square'}></div>
        <button className='myButton' onClick={() => setIsCircle(!isCircle)}>
          CHANGE SHAPE
        </button>
      </div>
      <div className='flexRow'>
        <input className='inp' ref={nameInput} type='text' placeholder='Enter...'></input>
        <button className='myButton' type='submit' onClick={clearInput}>
          Submit
        </button>
      </div>
     
    </>
  );
};
export default Comp;
