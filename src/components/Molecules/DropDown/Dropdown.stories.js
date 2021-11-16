import React from 'react';
import '../../../styles/tailwind.css';

import { Dropdown } from './Dropdown';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
};

const dropdown = [{
  key: 'Recruiter',
  value: 'Recruiter',
},
{
  key: 'Hiring Manager',
  value: 'Hiring Manager',
},
{
  key: 'Friends',
  value: 'Friends',
}];

const Template = ({
  heading, dropdown, dropdownid
}) => <Dropdown heading={heading} dropdown={dropdown} dropdownid={dropdownid} options={dropdown}/>;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  heading: 'Heading for dropdown',
  dropdown: dropdown,
  dropdownid:"dropdownId"
};
