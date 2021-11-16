import React from 'react';
import '../../../styles/tailwind.css';

import { UpdateUserForm } from './UpdateUserForm';

export default {
  title: 'Forms/UpdateUserForm',
  component: UpdateUserForm,
};

const Template = () => (
  <div className="max-w-md mx-auto mt-4 rounded bg-blueGray-200 p-8 text-center">
    <UpdateUserForm user />
  </div>
);

export const UpdateUserFormMain = Template.bind({});
UpdateUserFormMain.args = {};

UpdateUserFormMain.storyName = 'Update User Form';
