import { useState } from 'react';

export const useChangePassword = () =>{
  const  [userChangePasswordError, setUserChangePasswordError] = useState('');
  return {
    state: {
      userChangePasswordError,
    },
    actions: {
      setUserChangePasswordError,
    },
  };
}