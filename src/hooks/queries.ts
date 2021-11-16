import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
} from 'react-query';

import Axios, { AxiosInstance } from 'axios';
import { useAxios } from 'state';

import { API } from 'config';

import {
  IFetchData,
  TOnErrorFunc,
  TOnSuccessFunc,
  ILoginParams,
  IRegisterUserParams,
  IUserDetails,
  IError,
  IChangePasswordParams,
  IResetPasswordParams,
  ICreatePasswordForm,
  IOneTimePasswordParams,
  IWaitlistForm,
} from 'types';

const { ENDPOINTS } = API;
const {
  POST, GET, PUT, DELETE,
} = ENDPOINTS;

export const makeFetcher = (axiosInstance: AxiosInstance) => async (_url: string, options?: IFetchData, verb = 'get') => {
  const { data, status } = await axiosInstance[verb](_url, options);
  if (status >= 200 && status < 400) {
    return data;
  }
  throw Error(status);
};

export const useUserQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IUserDetails, IError> => {
  const fetcher = makeFetcher(useAxios());
  return useQuery('user', () => fetcher(`${GET.USER_DETAILS}`), { initialData, enabled: !!isEnabled });
};

export const useLoginMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc, redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(({ email, password }: ILoginParams) => fetcher(`${POST.LOGIN}`, { email, password }, 'post'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data, redirect);
    },
  });
};

export const useChangePasswordMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation((passWordChangeData: IChangePasswordParams) => fetcher(`${PUT.CHANGE_PASSWORD}`, passWordChangeData, 'put'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data === undefined ? data = { detail: 'error' } : data, redirect);
    },
  });
};

export const useResetPasswordMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(({ email }: IResetPasswordParams) => fetcher(`${POST.TEMP_TOKEN}`, { email }, 'post'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data === null ? { data: 'ok' } : data);
    },
  });
};

export const useOneTimePassworddMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(({ tempToken }: IOneTimePasswordParams) => fetcher(`${POST.VALIDATE_TEMP_TOKEN}`, { tempToken }, 'post'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data === null ? data = { detail: 'Password Mismatched' } : data, redirect);
    },
  });
};

export const useCreatePasswordMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(({ newPassword }: ICreatePasswordForm) => fetcher(`${PUT.RESET_PASSWORD}`, { newPassword }, 'put'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data, redirect);
    },
  });
};

export const useLogoutMutation = ():UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(() => fetcher(`${POST.LOGOUT}`, null, 'post'));
};

export const useRegisterUserMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation((user
  : IRegisterUserParams) => fetcher(`${POST.REGISTER}`, user, 'post'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data, redirect);
    },
  });
};

export const useUserUpdateMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc, redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation((userDetailsData: IUserDetails) => fetcher(`${PUT.USER_DETAILS}`,
    userDetailsData, 'put'), {
    onError: () => {
      onError();
    },
    onSuccess: (data) => {
      onSuccess(data === null ? 'success' : data, redirect);
    },
  });
};

export const useEmailMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => useMutation(({ email }) => Axios.post('/api/waitlist', { email }), {
  onError: (e) => {
    onError(e);
  },
  onSuccess: (data) => {
    onSuccess(data, redirect);
  },
});
