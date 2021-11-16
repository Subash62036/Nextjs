import React from 'react';
import '../../../styles/tailwind.css';

import { ChangePasswordForm } from './ChangePasswordForm';

export default {
  title: 'Forms/ChangePasswordForm',
  component: ChangePasswordForm,
};

const Template = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <ChangePasswordForm />
  </div>
);

export const ChangePasswordFormMain = Template.bind({});
ChangePasswordFormMain.args = {};

ChangePasswordFormMain.storyName = 'Change Password Form';
