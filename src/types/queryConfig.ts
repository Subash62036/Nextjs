export interface QueryConfig {
  VERB: string,
  ENDPOINT: string,
}

export interface IError {
  message: string
}

export interface IFetchData {
  [key:string]: any
}

export type TOnErrorFunc = (e?:unknown, vars?:unknown, context?:unknown) => void
export type TOnSuccessFunc = (data?: any, redirect?:string) => void
