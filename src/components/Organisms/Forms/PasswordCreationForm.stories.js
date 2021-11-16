import React from 'react';
import '../../../styles/tailwind.css';

import { PasswordCreationForm } from './PasswordCreationForm';

export default {
  title: 'Forms/PasswordCreationForm',
  component: PasswordCreationForm,
};

const Template = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <PasswordCreationForm />
  </div>
);

export const PasswordCreationFormMain = Template.bind({});
PasswordCreationFormMain.args = {};

PasswordCreationFormMain.storyName = 'Change Password Form';