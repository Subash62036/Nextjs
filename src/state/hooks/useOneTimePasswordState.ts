import { useState } from 'react';

export const useOneTimePasswordState = () => {
  const [oneTimePasswordError, setOneTimePasswordError] = useState('');

  return {
    state: {
      oneTimePasswordError,
    },
    actions: {
      setOneTimePasswordError,
    },
  };
};