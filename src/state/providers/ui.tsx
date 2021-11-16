import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  useLoginState,
  useRegisterState,
  useForgotPassword,
  useUpdateUser,
  useOneTimePasswordState,
  usePasswordCreation,
  useWaitlistRegister,
  useChangePassword,
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
  const { state: registerState, actions: registerActions } = useRegisterState();
  const { state: forgotPasswordState, actions: forgotPasswordAction } = useForgotPassword();
  const { state: updateUserState, actions: updateUserAction } = useUpdateUser();
  const { state: oneTimePsswordState, actions: oneTimePsswordAction } = useOneTimePasswordState();
  const { state: passwordCreationState, actions: passwordCreationAction } = usePasswordCreation();
  const { state: waitlistRegisterState, actions: waitlistRegisterAction } = useWaitlistRegister();
  const { state: changePasswordState, actions: changePasswordAction } = useChangePassword();
  const state = {
    actions: {
      ...loginActions,
      ...registerActions,
      ...forgotPasswordAction,
      ...updateUserAction,
      ...oneTimePsswordAction,
      ...passwordCreationAction,
      ...waitlistRegisterAction,
      ...changePasswordAction,
    },
    state: {
      ...loginState,
      ...registerState,
      ...forgotPasswordState,
      ...updateUserState,
      ...oneTimePsswordState,
      ...passwordCreationState,
      ...waitlistRegisterState,
      ...changePasswordState,
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
