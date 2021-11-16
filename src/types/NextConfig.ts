export interface INextConfig {
  serverRuntimeConfig: {
    apiBaseURL: string
    authCookieName: string
    authRefreshCookieName: string
    siteBaseURL: string
    cloudinaryThumbnailUrl: string
    cloudinaryCloudName: string
    mongo_email: string
  },
  publicRuntimeConfig: {
    apiBaseURL: string
    authCookieName: string
    authRefreshCookieName: string
    cloudinaryThumbnailUrl: string
    cloudinaryCloudName: string
    mongo_email: string
  }
}
