import React from 'react';
import '../../../styles/tailwind.css';

import { GenericSuccessMessage } from './GenericSuccessMessage';

export default {
  title: 'Atoms/GenericSuccessMessage',
  component: GenericSuccessMessage,
};

const Template = ({
  text,
  className,
}) => <GenericSuccessMessage className={className}>{text}</GenericSuccessMessage>;

export const GenericSuccessMessageComponent = Template.bind({});
GenericSuccessMessageComponent.args = {
  text: 'this is an success message',
  className: '',
};

GenericSuccessMessageComponent.storyName = 'Success Message';