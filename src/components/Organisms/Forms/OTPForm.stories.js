import React from 'react';
import '../../../styles/tailwind.css';

import { OTPForm } from './OTPForm';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
};

const Template = () => (
  <div className="max-w-md mx-auto mt-4 rounded bg-blueGray-200 p-8 text-center">
    <OTPForm />
  </div>
);

export const LoginFormMain = Template.bind({});
LoginFormMain.args = {};

LoginFormMain.storyName = 'OTP Form';
