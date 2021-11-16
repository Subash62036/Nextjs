import React, { useState } from 'react';
import '../../../styles/tailwind.css';

import { Button, Modal } from 'components';

export default {
  title: 'Modals/Modal',
  component: Modal,
};

const ModalController = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal
        setOpen={setOpen}
        size="medium"
        open={open}
      >
        <h3>This is a modal</h3>
      </Modal>
    </>
  );
};

const Template = () => (
  <ModalController />
);

export const MainModal = Template.bind({});
MainModal.args = {};

MainModal.storyName = 'Reusable Modal';
