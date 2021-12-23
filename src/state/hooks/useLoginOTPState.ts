import { useState } from 'react';

export const useLoginOTPState = () => {
  const [loginOTPError, setLoginOTPError] = useState('');
  const [loginOTPModalOpen, setLoginOTPModalOpen] = useState(false);

  return {
    state: {
      loginOTPError,
      loginOTPModalOpen,
    },
    actions: {
      setLoginOTPError,
      setLoginOTPModalOpen,
    },
  };
};
