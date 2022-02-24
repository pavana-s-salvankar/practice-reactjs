import { useState } from 'react';

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue(initValue);
  };
  return [value, onChange, reset];
};
export default useInput;
