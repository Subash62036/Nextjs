import { ROUTES } from 'config';

export const MAIN_NAV = {
  LOGGED_IN: {
    USER_DROPDOWN_MENU: [
      {
        text: 'Profile',
        href: ROUTES.USER_PROFILE,
      },
    ],
    MAIN_MENU_ITEMS: [
      {
        text: 'Dashboard',
        href: ROUTES.DASHBOARD,
      },
      // {
      //   text: 'Insights',
      //   href: ROUTES.INSIGHTS,
      // },
      {
        text: 'Profile',
        href: ROUTES.USER_PROFILE,
      },
    ],
  },
  LOGGED_OUT: {
    USER_DROPDOWN_MENU: [],
    MAIN_MENU_ITEMS: [],
  },
};
