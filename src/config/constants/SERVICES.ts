export const API = {
  ENDPOINTS: {
    GET: {
      USER_DETAILS: '/user',
      USER_BY_USERNAME: '/user-by-username/',
      ALL_ORDERS: '/orders',
      DASHBOARD: '/admin/dashboard',
      ALL_CUSTOMERS: '/customers',
      ALL_CAPTAINS: '/captains',
      ORDER_DETAIL: '/order/',
      CUSTOMER_DETAIL: '/customer/',
      CAPTAIN_DETAIL: '/captain/',
      CUSTOMER_RIDE_DETAILS: '/customer/',
    },
    POST: {
      LOGIN: '/login',
      LOGOUT: '/user/logout',
      REFRESH: '/refresh-token',
      TEMP_TOKEN: '/profile/temp-token',
      VALIDATE_TEMP_TOKEN: '/profile/validate-temp-token',
      LOGIN_OTP: '/verify'
    },
    PUT: {
      ENABLE_DISABLE_USER: '/user/',
      VERIFY_DOC: '/verify-captain/'
    },
    DELETE: {
    },
  },
};
