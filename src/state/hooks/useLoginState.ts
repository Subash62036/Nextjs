import { useState } from 'react';

export const useLoginState = () => {
  const [loginError, setLoginError] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  return {
    state: {
      loginError,
      loginModalOpen,
      loginSuccess,
    },
    actions: {
      setLoginError,
      setLoginModalOpen,
      setLoginSuccess
    },
  };
};
