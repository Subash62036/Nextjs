/* eslint-disable */
import { Dispatch, SetStateAction } from 'react';

interface IArgs {
 redirect?: string | boolean
 data?: any
}
export type TFunc = (...IArgs) => void
export type TModalOpenState = [boolean, Dispatch<SetStateAction<boolean>>]
export type TAuthState = [string, Dispatch<SetStateAction<string>>]
export interface IUIContext {
  actions : {
    [key:string]: Dispatch<SetStateAction<any>>
  }
  state: {
    [key:string]: any
  },
}

export interface IAuthContext {
  user: {
    [key:string]: TAuthState
  }
  actions: {
    [key:string]: TFunc
  }
}

export interface IAxiosContext {
  AxiosInstance
}
