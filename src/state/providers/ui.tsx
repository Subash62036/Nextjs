import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  useLoginState,
  useLoginOTPState,
  useModalState,
} from 'state';
import { IUIContext } from 'types/state';

type TUIContextProviderProps = {
  children: React.ReactNode;
}

const UIContext = createContext({});

const UIContextProvider = ({
  children,
}: TUIContextProviderProps): JSX.Element => {
  const { state: loginState, actions: loginActions } = useLoginState();
  const { state: loginOTPState, actions: loginOTPActions } = useLoginOTPState();
  const { state: modalState, actions: modalActions } = useModalState();

  const state = {
    actions: {
      ...loginActions,
      ...loginOTPActions,
      ...modalActions,
    },
    state: {
      ...loginState,
      ...loginOTPState,
      ...modalState,
    },
  };
  return <UIContext.Provider value={state}>{children}</UIContext.Provider>;
};

UIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalUiContext = (): IUIContext => useContext(UIContext) as IUIContext;

export { UIContext };
export { UIContextProvider };
export default UIContextProvider;
