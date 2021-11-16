import { useState } from 'react';

export const useRegisterState = () => {
  const [registerError, setRegisterError] = useState('');
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return {
    state: {
      registerError,
      registerModalOpen,
    },
    actions: {
      setRegisterError,
      setRegisterModalOpen,
    },
  };
};
