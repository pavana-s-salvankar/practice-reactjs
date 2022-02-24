import { useState } from 'react';

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const bind = {
    onChange: (e) => {
      setValue(e.target.value);
    },
    value,
  };

  return [value, bind];
};
export default useInput;
