import React from 'react';
import '../../../styles/tailwind.css';

import { ButtonWidget } from './ButtonWidget';

export default {
  title: 'Molecules/ButtonWidget',
  component: ButtonWidget,
};

const Template = ({
  bottomText, onWidgetClick,
}) => <ButtonWidget bottomText={bottomText} onWidgetClick={onWidgetClick} />;

export const DefaultButtonWidget = Template.bind({});
DefaultButtonWidget.args = {
  bottomText: 'text to show at the bottom',
  onWidgetClick: () => alert('onWidgetClick'),
};
