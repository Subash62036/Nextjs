import React, { Dispatch, SetStateAction } from 'react';
import { render } from 'react-dom';
import {
  Modal, Button, Typography,
} from 'components';

export interface IConfirmDeletionModalProps {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<false>>
  action: () => void
  title: string
  message: string,
}

export const ConfirmActionModal = ({
  message, isOpen, setOpen, action, title,
} : IConfirmDeletionModalProps):JSX.Element => {
  const handleConfirm = () => {
    action();
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        id="ConfirmMessageModal"
        open={isOpen}
        setOpen={setOpen}
        showCloseButton={false}
        size="xlarge"
      >
        <Typography variant="h3">{title}</Typography>
        <Typography className="mt-4" variant="h4">{message}</Typography>
        <div className="mt-4 grid grid-cols-2">
          <div className="px-4">
            <Button className="w-full" onClick={() => handleConfirm()}>Confirm</Button>
          </div>
          <div className="px-4">
            <Button className="w-full" variant="cancel" onClick={() => handleCancel()}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
