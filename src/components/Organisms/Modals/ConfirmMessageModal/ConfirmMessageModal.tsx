import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
} from 'components';

export interface IConfirmMessageModalProps {
  isOpen?: boolean,
  setOpen?: Dispatch<SetStateAction<false>>
  message: string,
}

export const ConfirmMessageModal = ({
  message, isOpen, setOpen,
} : IConfirmMessageModalProps):JSX.Element => (
  <>
    <Modal
      id="ConfirmMessageModal"
      open={isOpen}
      setOpen={setOpen}
      showCloseButton={false}
      size="xlarge"
    >
      <p>{message}</p>
    </Modal>
  </>
);
