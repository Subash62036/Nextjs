import React from 'react';
import '../../../styles/tailwind.css';
import { LinkIcon } from '@heroicons/react/solid';
import { IconOverlay } from './IconOverlay';

export default {
  title: 'Molecules/IconOverlay',
  component: IconOverlay,
};

const Template = ({
  size, bgColor,
}) => <IconOverlay Icon={LinkIcon} caption="Bottom Caption" bgColor={bgColor} size={size} onClickHandler={() => alert('Icon Overlay Click')} />;

export const DefaultIconOverlay = Template.bind({});
DefaultIconOverlay.args = {
};

export const SmallIconOverlay = Template.bind({});
SmallIconOverlay.args = {
  bgColor: 'bg-blue-100',
  size: 'small',
};

export const LargeIconOverlay = Template.bind({});
LargeIconOverlay.args = {
  bgColor: 'bg-blue-100',
  size: 'large',
};

export const XLargeIconOverlay = Template.bind({});
XLargeIconOverlay.args = {
  bgColor: 'bg-blue-100',
  size: 'xlarge',
};
