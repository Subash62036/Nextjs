import React from 'react';
import '../../../styles/tailwind.css';

import { RegisterForm } from './RegisterForm';

export default {
  title: 'Forms/RegisterForm',
  component: RegisterForm,
};

const Template = () => (
  <div className="max-w-md mx-auto mt-4 rounded bg-blueGray-200 p-8 text-center">
    <RegisterForm />
  </div>
);

export const RegisterFormMain = Template.bind({});
RegisterFormMain.args = {};

RegisterFormMain.storyName = 'Register Account Form';
