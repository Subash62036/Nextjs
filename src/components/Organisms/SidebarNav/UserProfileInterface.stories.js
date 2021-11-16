import React from 'react';
import '../../../styles/tailwind.css';

import { UserProfileInterface } from './UserProfileInterface';

export default {
  title: 'SidebarNav/UserProfileInterface',
  component: UserProfileInterface,
};

const Template = () => <UserProfileInterface user />;

export const Default = Template.bind({});
Default.args = {
};