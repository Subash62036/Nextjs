import React from 'react';
import '../../../styles/tailwind.css';

import { OneTimePasswordForm } from './OneTimePasswordForm';

export default {
  title: 'Forms/OneTimePasswordForm',
  component: OneTimePasswordForm,
};

const Template = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <OneTimePasswordForm />
  </div>
);

export const OneTimePasswordFormMain = Template.bind({});
OneTimePasswordFormMain.args = {};

OneTimePasswordFormMain.storyName = 'One Time Password Form';