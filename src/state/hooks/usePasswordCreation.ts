import { useState } from 'react';

export const usePasswordCreation = () => {
  const [passwordCreationError, setPasswordCreationError] = useState('');

  return {
    state: {
      passwordCreationError,
    },
    actions: {
      setPasswordCreationError,
    },
  };
};