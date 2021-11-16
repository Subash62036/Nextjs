import { Dispatch, SetStateAction } from 'react';

export interface ILoginParams {
  email: string
  password: string
}

export interface ILoginFormProps {
  redirect?: string
}


interface dropdownInterface {
  key: string,
  value: string
}

export interface IChangePasswordParams {
  oldPassword: string,
  newPassword: string,
  confirmPassword:string
}

export interface IResetPasswordParams {
  username: string,
  email: string,
}

export interface IOneTimePasswordParams {
  tempToken: number,
}

export interface ICreatePasswordForm {
  newPassword: string,
  confirmPassword: string,
}

export interface IWaitlistForm {
  firstName: string,
  lastName: string,
  email: string,
}
