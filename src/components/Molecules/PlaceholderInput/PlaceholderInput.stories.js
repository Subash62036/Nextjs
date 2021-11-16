import React from 'react';
import '../../../styles/tailwind.css';
import { PlaceholderInput } from './PlaceholderInput';

export default {
  title: 'Molecules/PlaceholderInput',
  component: PlaceholderInput,
};

const Template = ({
  placeholderText, className, isTextArea, textAreaRows, textAreaCols,
}) => (
  <PlaceholderInput
    placeholderText={placeholderText}
    className={className}
    isTextArea={isTextArea}
    textAreaRows={textAreaRows}
    textAreaCols={textAreaCols}
  />
);

export const Default = Template.bind({});
Default.args = {
};

export const WithPlaceholderText = Template.bind({});
WithPlaceholderText.args = {
  placeholderText: 'With some placeholder',
};

export const WithDifferentBgColor = Template.bind({});
WithDifferentBgColor.args = {
  className: 'bg-yellow-50',
  placeholderText: 'With some placeholder',
};

export const AsTextArea = Template.bind({});
AsTextArea.args = {
  className: 'bg-yellow-50',
  placeholderText: 'Adding a placeholder text to showcase some long, pretty long.. placeholder.',
  isTextArea: true,
  textAreaRows: 5,
  textAreaCols: 10,

};
