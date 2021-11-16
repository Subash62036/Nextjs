import React from 'react';
import '../../../styles/tailwind.css';
import { DatePicker } from './DatePicker';

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
};

const Template = ({
  initialValue, onChangeHandler,
}) => <DatePicker initialValue={initialValue} onChangeHandler={onChangeHandler} />;

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  initialValue: new Date(1990, 11)
};

export const WithChangeHandler = Template.bind({});
WithChangeHandler.args = {
  initialValue: new Date(1990, 11),
  onChangeHandler: (date)=>alert(date)
};
