import React from 'react';
import '../../../styles/tailwind.css';

import { EmailCaptureForm } from './EmailCaptureForm';

export default {
  title: 'Forms/EmailCaptureForm',
  component: EmailCaptureForm,
}

const Template = () => (
  <div className="max-w-md mx-auto mt-4 rounded bg-blueGray-200 p-8 text-center">
    <EmailCaptureForm />
  </div>
)

export const EmailCaptureFormMain = Template.bind({})
EmailCaptureForm.args = {}

EmailCaptureForm.storyName = 'Email capture Form'
