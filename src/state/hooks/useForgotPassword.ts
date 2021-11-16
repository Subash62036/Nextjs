import { useState } from 'react';

export const useForgotPassword = () => {
  const [forgotPasswordError, setForgotPasswordError] = useState('');
  const [isOneTimePassword, setIsOneTimePassword] = useState(false);

  return {
    state: {
      forgotPasswordError,
      isOneTimePassword
    },
    actions: {
      setForgotPasswordError,
      setIsOneTimePassword
    },
  };
};
