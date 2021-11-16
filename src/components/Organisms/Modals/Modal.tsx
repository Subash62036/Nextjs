import React, {
  Fragment, useRef, Dispatch, SetStateAction,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { XIcon } from '@heroicons/react/solid';
import { Button } from 'components';

export type TModalSize =
'small' |
'medium' |
'large' |
'xlarge' |
'full'

export type TModalBackground =
'light' |
'dark'
export interface IModalProps {
  showCloseButton?: boolean
  closeButtonText?: string,
  id: string,
  mainText?: string,
  children?: React.ReactNode
  size?: TModalSize
  background?: TModalBackground
  open: boolean
  setOpen: Dispatch<SetStateAction<false>>
  customClasses?: string
}

const backgroundClasses = {
  light: 'bg-white text-secondary-700',
  dark: 'bg-secondary-500 text-secondary-100',
};

const sizeClasses = {
  small: 'sm:max-w-sm',
  medium: 'sm:max-w-md',
  large: 'sm:max-w-lg',
  xlarge: 'sm:max-w-xl',
  full: 'sm:max-w-[90%]',
};

export const Modal = ({
  showCloseButton = true,
  closeButtonText = 'Close',
  size = 'medium',
  background = 'light',
  children,
  open = false,
  setOpen,
  customClasses,
}: IModalProps): JSX.Element => {
  const closeButtonRef = useRef(null);
  const modalContainerClasses = classNames(
    sizeClasses[size],
    backgroundClasses[background],
    'inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6',
    customClasses,
  );
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={() => setOpen(false)} initialFocus={closeButtonRef}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={modalContainerClasses}>
              <XIcon
                className="w-4 h-4 absolute top-0.5 right-0.5 m-1 cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <div className="mt-3 text-center sm:mt-5" ref={closeButtonRef}>
                {children}
              </div>
              { showCloseButton && (
              <div className="mt-5 sm:mt-6">
                <Button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  {closeButtonText}
                </Button>
              </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
