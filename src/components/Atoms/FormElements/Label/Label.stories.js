import React from 'react';
import '../../../../styles/tailwind.css';

import { Label } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
};

const Template = ({
  label, className,
}) => <Label className={className} label={label} />;

export const FormLabel = Template.bind({});
FormLabel.args = {
  text: 'This is form label',
  className: '',
};
