import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import classNames from 'classnames';
import { UI_CONFIG } from 'config';
import { useGlobalUiContext } from 'state';
import { Button } from 'components';
import getConfig from 'next/config';
import { INextConfig } from 'types';

const {
  CONTENT: { EDIT_MODE },
  THUMBNAIL_SIZE: { SMALL_LANDSCAPE },
} = UI_CONFIG;
const {
  publicRuntimeConfig,
} = getConfig() as INextConfig;

const sizeWidth = {
  small: 'w-1/6',
  medium: 'w-1/4',
  large: 'w-1/2',
  xlarge: 'w-full',
};

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const defaultSize = 'medium';
const getSizeWidth = (width) => sizeWidth[width] || sizeWidth[defaultSize];

export const ImageViewingUi = ({
  className,
  width,
  data,
  removeEvidence,
  ...restProps
}): JSX.Element => {
  const allMergedClass = classNames(className, getSizeWidth(width));
  const { state: { ViewMode } } = useGlobalUiContext();
  const isEditMode = ViewMode === EDIT_MODE;
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        {data && data.map((value) => (
          <div key={value.evidenceId} className="flex flex-col justify-center mb-2 bg-white rounded-b-md " data-evidenceid={value.evidenceId}>
            <div className="justify-center">
              {
              value.cloudinaryPublicId
              && (
              <img
                src="https://images.unsplash.com/photo-1627798394618-08d06f098cba"
                alt={value.title}
                className={allMergedClass}
                {...restProps}
              />
              )
            }
            </div>

            <div className="flex flex-col text-center justify-center m-2">
              <h4 className="underline font-semibold">{value.title}</h4>
              <p className="truncate">{value.description}</p>
            </div>
            {
              isEditMode
              && (
              <Button
                variant="tertiary"
                className="border-t border-gray-100 rounded-none"
                leftIcon={closeIcon}
                onClick={() => removeEvidence(value.evidenceId)}
              >
                Remove
              </Button>
              )
            }
          </div>
        ))}
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};
