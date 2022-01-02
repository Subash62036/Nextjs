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
  IUserDetails,
  IError,
  IChangePasswordParams,
  IResetPasswordParams,
  ICreatePasswordForm,
  IOneTimePasswordParams,
  ILoginOTPParams,
  IOrderDetails,
  IDashboardDetails,
  ICaptainDetails,
  ICustomerDetails,
  IOrderSpecificList,
  IPersonalDetails,
  ICaptainSpecificObject
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
  //return data;
};

export const useUserQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IUserDetails,IError> => {
  const fetcher = makeFetcher(useAxios());
  return useQuery('user', () => fetcher(`${GET.USER_DETAILS}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllOrdersQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IOrderDetails, IError> => {
  const fetcher = makeFetcher(useAxios(true));
  return useQuery('allOrders', () => fetcher(`${GET.ALL_ORDERS}`), { initialData, enabled: !!isEnabled });
};

export const useDashboardQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IDashboardDetails, IError> => {
  const fetcher = makeFetcher(useAxios(true));
  return useQuery('dashboard', () => fetcher(`${GET.DASHBOARD}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllCustomersQuery = (initialData = null, isEnabled = true):
  UseQueryResult<ICustomerDetails, IError> => {
  const fetcher = makeFetcher(useAxios(true));
  return useQuery('allCustomers', () => fetcher(`${GET.ALL_CUSTOMERS}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllCaptainsQuery = (initialData = null, isEnabled = true):
  UseQueryResult<ICaptainDetails, IError> => {
  const fetcher = makeFetcher(useAxios(true));
  return useQuery('allCaptains', () => fetcher(`${GET.ALL_CAPTAINS}`), { initialData, enabled: !!isEnabled });
};

export const useGetOrderDetailsQuery = (id = null, initialData = null, isEnabled = true):
  UseQueryResult<IOrderSpecificList, IError> => {
  const fetcher = makeFetcher(useAxios(true)); //${GET.ORDER_DETAIL}${id}
  return useQuery(['captainsById', id], () => fetcher(`${GET.ORDER_DETAIL}`), { initialData, enabled: !!isEnabled });
};

export const useGetCustomerDetailsQuery = (id = null, initialData = null, isEnabled = true):
  UseQueryResult<IPersonalDetails, IError> => {
  const fetcher = makeFetcher(useAxios(true)); //${GET.CUSTOMER_DETAIL}${id}
  return useQuery(['customerById', id], () => fetcher(`${GET.CUSTOMER_DETAIL}`), { initialData, enabled: !!isEnabled });
};

export const useGetCaptainDetailsQuery = (id = null, initialData = null, isEnabled = true):
  UseQueryResult<ICaptainSpecificObject, IError> => {
  const fetcher = makeFetcher(useAxios(true)); //${GET.CAPTAIN_DETAIL}${id}
  return useQuery(['captainById', id], () => fetcher(`${GET.CAPTAIN_DETAIL}`), { initialData, enabled: !!isEnabled });
};

export const useLoginMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc, redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios(false));
  return useMutation((form: ILoginParams) => fetcher(`${POST.LOGIN}`, form, 'post'), {
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

export const useLoginOTPMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc, redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios(false));
  return useMutation((formdata: ILoginOTPParams) => fetcher(`${POST.LOGIN_OTP}`, formdata, 'post'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data, redirect);
    },
  });
};
