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
};

export const useUserQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IUserDetails,IError> => {
  const fetcher = makeFetcher(useAxios());
  return useQuery('user', () => fetcher(`${GET.USER_DETAILS}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllOrdersQuery = (page, pageSize, initialData = null, isEnabled = true):

  UseQueryResult<IOrderDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['allOrders', page, pageSize], () => fetcher(`${GET.ALL_ORDERS}?page=${page}&size=${pageSize}`), { initialData, enabled: !!isEnabled, keepPreviousData : true });
};

export const useDashboardQuery = (initialData = null, isEnabled = true):
  UseQueryResult<IDashboardDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery('dashboard', () => fetcher(`${GET.DASHBOARD}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllCustomersQuery = (page, pageSize, initialData = null, isEnabled = true):
  UseQueryResult<ICustomerDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['allCustomers', page, pageSize], () => fetcher(`${GET.ALL_CUSTOMERS}?page=${page}&size=${pageSize}`), { initialData, enabled: !!isEnabled, keepPreviousData : true });
};

export const useGetAllCaptainsQuery = (page, pageSize, initialData = null, isEnabled = true):
  UseQueryResult<ICaptainDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['allCaptains', page, pageSize], () => fetcher(`${GET.ALL_CAPTAINS}?page=${page}&size=${pageSize}`), { initialData, enabled: !!isEnabled, keepPreviousData : true });
};

export const useGetOrderDetailsQuery = (id = null, initialData = null, isEnabled = true):
  UseQueryResult<IOrderSpecificList, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['captainsById', id], () => fetcher(`${GET.ORDER_DETAIL}${id}`), { initialData, enabled: !!isEnabled });
};

export const useGetCustomerDetailsQuery = (id, initialData = null, isEnabled = true):
  UseQueryResult<IPersonalDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['customerById', id], () => fetcher(`${GET.CUSTOMER_DETAIL}${id}`), { initialData, enabled: !!isEnabled });
};

export const useGetCaptainDetailsQuery = (id = null, initialData = null, isEnabled = true):
  UseQueryResult<ICaptainSpecificObject, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['captainById', id], () => fetcher(`${GET.CAPTAIN_DETAIL}${id}`), { initialData, enabled: !!isEnabled });
};

export const useGetAllCustomerRides = (id, page, pageSize, initialData = null, isEnabled = true):
  UseQueryResult<ICaptainDetails, IError> => {
  const fetcher = makeFetcher(useAxios(false));
  return useQuery(['allCaptains', id, page, pageSize], () => fetcher(`${GET.CUSTOMER_RIDE_DETAILS}${id}/rides?page=${page}&size=${pageSize}`), { initialData, enabled: !!isEnabled, keepPreviousData : true });
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

export const useEnableDisableUserMutation = (
  onError: TOnErrorFunc,
  onSuccess: TOnSuccessFunc,
  redirect = null,
):UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(({formdata, id}) => fetcher(`${PUT.ENABLE_DISABLE_USER}${id}/account-status`, formdata, 'put'), {
    onError: (e) => {
      onError(e);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};

export const useLogoutMutation = ():UseMutationResult => {
  const fetcher = makeFetcher(useAxios());
  return useMutation(() => fetcher(`${POST.LOGOUT}`, null, 'post'));
};

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
