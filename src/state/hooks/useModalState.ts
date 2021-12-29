import { useState } from 'react';

export const useModalState = () => {
  const [openDisableModal, setOpenDisableModal] = useState(false);

  return {
    state: {
      openDisableModal,
    },
    actions: {
      setOpenDisableModal,
    },
  };
};