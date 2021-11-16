import { useState } from 'react';

export const useWaitlistRegister = () =>{
  const  [userWaitlistRegisterError, setUserWaitlistRegisterError] = useState('');
  return {
    state: {
      userWaitlistRegisterError,
    },
    actions: {
      setUserWaitlistRegisterError,
    },
  };
}