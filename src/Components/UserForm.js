import React from 'react';
import useInput from './CustomHooks/userInput';

const Form = () => {
  const [lastname, onChangeLastname, resetLastname] = useInput('');
  const [firstname, onChangeFirstname, resetFirstname] = useInput('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstname();
    resetLastname();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder='Enter Firstname...' value={firstname} onChange={onChangeFirstname} />
      <input placeholder='Enter Lastname...' value={lastname} onChange={onChangeLastname} />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default Form;
