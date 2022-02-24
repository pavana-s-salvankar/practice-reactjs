import React from 'react';
import useInput from './CustomHooks/userInput';

const Form = () => {
  const [lastname, bindLastname] = useInput('');
  const [firstname, bindFirstname] = useInput('');
  const handleSubmit = () => {
    alert(`Hello ${firstname} ${lastname}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Enter Firstname...' value={firstname} {...bindFirstname} />
      <input placeholder='Enter Lastname...' value={lastname} {...bindLastname} />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default Form;
