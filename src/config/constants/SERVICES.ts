export const API = {
  ENDPOINTS: {
    GET: {
      USER_DETAILS: '/user',
      USER_BY_USERNAME: '/user-by-username/',
      ALL_ORDERS: '/orders',
      DASHBOARD: '/dashboard',
      ALL_CUSTOMERS: '/customers',
      ALL_CAPTAINS: '/captains',
      ORDER_DETAIL: '/orderdetails', //'/order/',
      CUSTOMER_DETAIL: '/customer/', // /customer/',
      CAPTAIN_DETAIL: '/captaindetails', //'/captain/'
      CUSTOMER_RIDE_DETAILS: '/customer/', //'/customer/{id}/rides'
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
      USER_DETAILS: '/user-profile/',
      CHANGE_PASSWORD: '/profile/change-password',
      RESET_PASSWORD: '/profile/reset-password',
    },
    DELETE: {
    },
  },
};
