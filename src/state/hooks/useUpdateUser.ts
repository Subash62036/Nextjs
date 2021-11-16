import { useState } from 'react';

export const useUpdateUser = () => {
  const [userUpdateError, setUserUpdateError] = useState('');

  return {
    state: {
      userUpdateError,
    },
    actions: {
      setUserUpdateError,
    },
  };
};