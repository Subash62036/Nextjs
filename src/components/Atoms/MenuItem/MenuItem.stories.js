import React from 'react';
import '../../../styles/tailwind.css';

import { MenuItem } from './MenuItem';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
};

const Template = ({
  text, className
}) =>  <div className="max-w-md bg-sky-300"><MenuItem className={className} text={text} /></div>;

export const Item = Template.bind({});
Item.args = {
  text: 'Edit Profile',
  className: '',
};

