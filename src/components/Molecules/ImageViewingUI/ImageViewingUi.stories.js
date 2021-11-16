import React from 'react'
import '../../../styles/tailwind.css'
import { ImageViewingUi } from './ImageViewingUi'

export default {
  title: 'Molecules/ImageViewingUi',
  component: ImageViewingUi,
}

const Template = ({ className, ImageUrl, width }) => (
  <ImageViewingUi className={className} width={width} ImageUrl={ImageUrl} />
)

export const Small = Template.bind({})
Small.args = {
  className: '',
  width: 'small',
  ImageUrl: 'https://images.unsplash.com/photo-1627798394618-08d06f098cba',
}

export const Medium = Template.bind({})
Medium.args = {
  className: '',
  width: 'medium',
  ImageUrl: 'https://images.unsplash.com/photo-1627798394618-08d06f098cba',
}
