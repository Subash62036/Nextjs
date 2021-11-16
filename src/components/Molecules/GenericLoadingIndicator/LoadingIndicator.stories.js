import React from 'react';
import { Loader } from './LoaderIndicator';
import '../../../styles/tailwind.css';

export default {
    title: 'Loader',
    component: Loader,
    argTypes: {
      color: { control: 'color' },
    },
  };

  const Template = (args) => <Loader {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  primary: false,
  label: 'Loader',
  width:100,
};

export const primary = Template.bind({});
primary.args = {
  primary: true,
  label: 'Loader',
  width: 100,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Loader',
  width: 120,
};
