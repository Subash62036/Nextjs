import React from 'react'
import '../../../styles/tailwind.css'
import { Card } from './Card'

export default {
  title: 'Atoms/Card',
  component: Card,
}

const Template = ({ size, variant, className }) => (
  <Card className={className} variant={variant} size={size}>
  </Card>
)

export const Small = Template.bind({})
Small.args = {
  variant: 'noborderRadius',
  size: 'small',
  className:''
}

export const Medium = Template.bind({})
Medium.args = {
  variant: 'noborderRadius',
  size: 'medium',
  className:''
}

export const Large = Template.bind({})
Large.args = {
  variant: 'noborderRadius',
  size: 'large',
  className:''
}

