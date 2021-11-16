import React from 'react';
import '../../../styles/tailwind.css';

import { GenericErrorMessage } from './GenericErrorMessage';

export default {
  title: 'Atoms/GenericErrorMessage',
  component: GenericErrorMessage,
};

const Template = ({
  text,
  className,
}) => <GenericErrorMessage className={className}>{text}</GenericErrorMessage>;

export const GenericErrorMessageComponent = Template.bind({});
GenericErrorMessageComponent.args = {
  text: 'this is an error message',
  className: '',
};

GenericErrorMessageComponent.storyName = 'Error Message';
