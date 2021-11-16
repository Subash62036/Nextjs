import React from 'react';
import '../../../styles/tailwind.css';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = ({
  variant, size, text, className, disabled
}) => <Button className={className} variant={variant} size={size} disabled={disabled}>{text}</Button>;

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  variant: 'primary',
  size: 'medium',
  text: 'Primary Button',
  className: '',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: 'primary',
  size: 'large',
  text: 'Primary Button',
  className: '',
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
  variant: 'primary',
  size: 'xlarge',
  text: 'Primary Button',
  className: '',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  size: 'medium',
  text: 'Primary Button',
  className: '',
  disabled: true
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  variant: 'secondary',
  size: 'medium',
  text: 'Secondary Button',
  className: '',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  variant: 'secondary',
  size: 'large',
  text: 'Secondary Button',
  className: '',
};

export const SecondaryExtraLarge = Template.bind({});
SecondaryExtraLarge.args = {
  variant: 'secondary',
  size: 'xlarge',
  text: 'Secondary Button',
  className: '',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  size: 'medium',
  text: 'Secondary Button',
  className: '',
  disabled: true
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  variant: 'tertiary',
  size: 'medium',
  text: 'Tertiary Medium Button',
  className: '',
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
  variant: 'tertiary',
  size: 'large',
  text: 'Tertiary Large Button',
  className: '',
};

export const TertiaryExtraLarge = Template.bind({});
TertiaryExtraLarge.args = {
  variant: 'tertiary',
  size: 'xlarge',
  text: 'Tertiary XLarge Button',
  className: '',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  size: 'medium',
  text: 'Tertiary Disabled Button',
  className: '',
  disabled: true
};
