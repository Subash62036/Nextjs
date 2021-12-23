import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  useLoginState,
  useForgotPassword,
  useUpdateUser,
  useOneTimePasswordState,
  usePasswordCreation,
  useChangePassword,
  useLoginOTPState,
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
  const { state: forgotPasswordState, actions: forgotPasswordAction } = useForgotPassword();
  const { state: updateUserState, actions: updateUserAction } = useUpdateUser();
  const { state: oneTimePsswordState, actions: oneTimePsswordAction } = useOneTimePasswordState();
  const { state: passwordCreationState, actions: passwordCreationAction } = usePasswordCreation();
  const { state: changePasswordState, actions: changePasswordAction } = useChangePassword();
  const { state: loginOTPState, actions: loginOTPActions } = useLoginOTPState();

  const state = {
    actions: {
      ...loginActions,
      ...forgotPasswordAction,
      ...updateUserAction,
      ...oneTimePsswordAction,
      ...passwordCreationAction,
      ...changePasswordAction,
      ...loginOTPActions,
    },
    state: {
      ...loginState,
      ...forgotPasswordState,
      ...updateUserState,
      ...oneTimePsswordState,
      ...passwordCreationState,
      ...changePasswordState,
      ...loginOTPState,
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
