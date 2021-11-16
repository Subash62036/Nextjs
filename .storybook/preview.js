import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  UIContextProvider,
  AuthContextProvider,
} from 'state';

export const decorators = [
  (Story) => {
    const [queryClient] = React.useState(() => new QueryClient())
    return (
      <QueryClientProvider client={queryClient}>
        <UIContextProvider>
          <AuthContextProvider>
                <Story />
          </AuthContextProvider>
        </UIContextProvider>
      </QueryClientProvider>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
