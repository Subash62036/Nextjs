module.exports = {
  serverRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL,
    authCookieName: process.env.AUTH_COOKIE_NAME,
    authRefreshCookieName: process.env.AUTH_REFRESH_COOKIE_NAME,
    siteBaseURL: process.env.SITE_BASE_URL || 'http://localhost:3000',
    cloudinaryThumbnailUrl: process.env.CLOUDINARY_THUMBNAIL_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    mongoEmail: process.env.MONGO_EMAIL,
  },
  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL,
    authCookieName: process.env.AUTH_COOKIE_NAME,
    authRefreshCookieName: process.env.AUTH_REFRESH_COOKIE_NAME,
    cloudinaryThumbnailUrl: process.env.CLOUDINARY_THUMBNAIL_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
};
