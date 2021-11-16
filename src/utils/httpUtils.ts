import { HANDLE_ERROR } from 'config';

export const onErrorResponse = (e) => {
  let ErrorMessageg = '';

  const errorMessage = e.message

  HANDLE_ERROR.filter((e) => {
    if (e.error === errorMessage) {
      ErrorMessageg = e.message;
    }
  })
  return ErrorMessageg;
}
