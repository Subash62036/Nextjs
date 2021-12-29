import React from 'react';
import '../../../styles/tailwind.css';

import { LoginForm } from './LoginForm';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
};

const Template = () => (
  <div className="max-w-md mx-auto mt-4 rounded bg-blueGray-200 p-8 text-center">
    <LoginForm />
  </div>
);

export const LoginFormMain = Template.bind({});
LoginFormMain.args = {};

LoginFormMain.storyName = 'Log In Form';
