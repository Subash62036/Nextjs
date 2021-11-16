import React from 'react';
import '../../../styles/tailwind.css';

import { UploadButton } from './UploadButton';

export default {
  title: 'Atoms/UploadButton',
  component: UploadButton,
};

const Template = ({
  variant, size, text, className,
}) => <UploadButton className={className} variant={variant} size={size}>{text}</UploadButton>;

export const MainUploadButton = Template.bind({});
MainUploadButton.args = {
  variant: 'primary',
  size: 'medium',
  text: 'Primary UploadButton',
  className: '',
};
