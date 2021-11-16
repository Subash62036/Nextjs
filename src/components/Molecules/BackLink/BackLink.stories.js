import React from 'react';
import '../../../styles/tailwind.css';

import { BackLink } from './BackLink';

export default {
  title: 'Molecules/BackLink',
  component: BackLink,
};

const Template = ({
  text,
  href,
  className,
}) => <BackLink text={text} href={href} className={className} />;

export const GenericErrorMessageComponent = Template.bind({});
GenericErrorMessageComponent.args = {
  text: 'Back to another page',
  href: '#',
  className: '',
};

GenericErrorMessageComponent.storyName = 'Error Message';
