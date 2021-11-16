import Axios, { AxiosRequestConfig } from 'axios';
import getConfig from 'next/config';
import { INextConfig } from 'types';
import Cookies from 'cookies';
import { makeAuthHeaders } from '_axios';
import { API, URIS } from 'config';

const {
  serverRuntimeConfig: {
    apiBaseURL,
  },
} = getConfig() as INextConfig;

const { ENDPOINTS } = API;
const { POST } = ENDPOINTS;

export default async (req, res) => {
  const { query } = req;
  const cookies = new Cookies(req, res);
  const { headers } = makeAuthHeaders(cookies) as AxiosRequestConfig;
  const axiosInstance = Axios.create({
    baseURL: apiBaseURL,
    headers,
  });
  try {
    await axiosInstance.post(POST.LOGOUT);
    res.status(200).redirect(`${URIS.LOGOUT_REDIRECT}?logout=true&username=${query?.username}`).end();
  } catch (error) {
    // TODO:: log error to splunk, datadog, etc...
    res.status(500).redirect('/_error').end();
  }
};
