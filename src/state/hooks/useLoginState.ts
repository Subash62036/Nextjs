import { useState } from 'react';

export const useLoginState = () => {
  const [loginError, setLoginError] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return {
    state: {
      loginError,
      loginModalOpen,
    },
    actions: {
      setLoginError,
      setLoginModalOpen,
    },
  };
};
