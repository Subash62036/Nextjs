export const API = {
  ENDPOINTS: {
    GET: {
      USER_DETAILS: '/user',
      USER_BY_USERNAME: '/user-by-username/',
      ALL_ORDERS: '/all_orders', // /orders
      DASHBOARD: '/dashboard',
      ALL_CUSTOMERS: '/all_customers', // /customers
      ALL_CAPTAINS: '/all_captains', // /captains
      ORDER_DETAIL: '/orderdetails', //'/order/',
      CUSTOMER_DETAIL: '/customerdetails/', // /customer/',
      CAPTAIN_DETAIL: '/captaindetails', //'/captain/'
      CUSTOMER_RIDE_DETAILS: '/customerRidesDetails', //'/customer/{id}/rides'
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
