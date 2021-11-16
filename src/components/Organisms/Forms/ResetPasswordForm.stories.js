import React from 'react';
import '../../../styles/tailwind.css';

import { ResetPasswordForm } from './ResetPasswordForm';

export default {
  title: 'Forms/ResetPasswordForm',
  component: ResetPasswordForm,
};

const Template = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <ResetPasswordForm />
  </div>
);

export const ResetPasswordFormMain = Template.bind({});
ResetPasswordFormMain.args = {};

ResetPasswordFormMain.storyName = 'Forgot Password Form';
