# TITLE Web

## Table of Contents
* [Intro and General Requirements](#intro-and-general-requirements)
* [Quick Start](#quick-start)
* [Adding New Libraries](#adding-new-libraries)
* [Linting](#linting)
* [Storybook](#storybook)
* [Cypress](#cypress)
* [Tech Stack](#tech-stack) 
* [General Development Practices](#general-development-practices)
* [Components](#components)
* [Styling](#styling-with-tailwindcss)
* [State Management](#state-management)
* [Files and folders](#files-and-folders)

## Intro and General Requirements

### Welcome to TITLE Web! 

This project has a few basic requirements for local development:
- [Node version 14+](https://github.com/nvm-sh/nvm)
- [Yarn Package Manager](https://yarnpkg.com/)

Please continue to use Yarn for all future package additions or upgrades.

### Quick Start

- Install: `yarn`
- Run in terminal `yarn dev`
- Navigate to https://localhost:3000

### Adding New Libraries

To add a new dependency:

```
yarn add <dependency>
```

To add a new dev-dependency:

```
yarn add -D <dependency>
```

### Linting
```
yarn lint
```

### Storybook

- `yarn storybook`

### Cypress

- `yarn cypress:open`

# Tech Stack

### Language:
[ES7 / Typescript](https://www.typescriptlang.org/)
### Framework:
[NextJS](https://www.nextjs.com)
### Data Fetching: 
[React Query](https://react-query.tanstack.com/)

( We use custom hooks for data fetching )<br>
Example:<br>
[Custom Hooks Example From React Query Documentation](https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/custom-hooks?from-embed)
### Styling
[TailwindCSS 2.2.2](https://www.tailwindcss.com)

### Form Components
[Formik](https://formik.org/docs/overview)

### Form Schema Management
[Yup](https://github.com/jquense/yup)

### Component Documentation
[Storybook React](https://storybook.js.org/docs/react/get-started/introduction)

### Feature, Integration and End To End Testing
[Cypress](https://www.cypress.io)

# General Development Practices

### Linting / Code Style
If you are using VSCode as your IDE, please set the following:
```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
Git hooks should also be running on commit and push, however they do not always function.

Please remember to always run 
```
yarn lint
```
command and fix any issues before opening a pull request.

### Path Aliases
The application has several path aliases defined in tsconfig.json :
```
"paths": {
  "components": ["components/*"],
  "layouts": ["layouts/*"],
  "styles": ["styles/*"],
  "pages": ["pages/*"],
  "config": ["config/*"],
  "types": ["types/*"],
  "hooks": ["hooks/*"],
  "_axios": ["_axios/*"]
}
```
### Accessing Environment Variables
We access environment variables through next.config.js and the NextJS getConfig() utility.

```jsx
import getConfig from 'next/config';
import { INextConfig } from 'types';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig() as INextConfig;

// server runtime config is only available during SSR
// public runtime config is only available on the client
```

# Components
## Structure / Design System

The application is being built following the Atomic Design Paradigm.
https://atomicdesign.bradfrost.com/chapter-2/

## Components Folders:
- Atoms
- Molecules
- Organisms

### Atoms contains the smallest building block components of the site -
- Buttons
- Typography
- Form Elements
- Simple messages

### Molecules contains components that are built with at least two atom components:
- UploadButton
- Text input with submit button ( search feature )
- Zoom in / Zoom out control pair

### Organisms contains components that are built with at least two molecule components
- Register Form
- Login Form
- Modal
- Navbars

# Styling With TailwindCSS
This project has TailwindCSS 2.2.x installed with Just In Time mode enabled. This means that all new classes being added during development time will automatically be built, including all classes with custom arbitrary values.

# State Management
### How To
State is managed through several context providers. Each context provider has a hook export that will allow you to quickly destructure state properties and actions for any given need.

## UI State
```jsx
import { useGlobalUiContext } from 'state';
import { IUIContext } from 'types';


export default function MyPage():JSX.Element {
  const { state: uiState, actions: uiActions } = useGlobalUiContext() as IUIContext;
  const {
    registerModalOpen, loginModalOpen,
  } = uiState;
  const {
    setRegisterModalOpen,
    setLoginModalOpen,
  } = uiActions;
  return (
    <>
      <Modal data-test-id="registerModal" showCloseButton={false} open={registerModalOpen} setOpen={setRegisterModalOpen} id="register" size="large"><RegisterForm /></Modal>
      <Modal showCloseButton={false} background="light" size="small" open={loginModalOpen} setOpen={setLoginModalOpen} id="auth"><LoginForm /></Modal>
      </>    
// etc...
```

## Asynchronous Data State
React Query Client provides several methods of accessing data that has been fetched previously. 

Example:
```jsx
import { useQueryClient } from 'react-query';
import { IUserDetails } from 'types';

// within a component's function body:
const queryClient = useQueryClient();
const userData = queryClient.getQueryData('user') as IUserDetails;

// userData is now available for use within the component
<h1>{userData.username}</h1>
```
## Files and Folders
```js
┣ .github/
┃ ┗ PULL_REQUEST_TEMPLATE.MD
┣ .husky/
┃ ┣ _/
┃ ┃ ┗ husky.sh
┃ ┣ .gitignore
┃ ┣ pre-commit
┃ ┗ pre-push
┣ .next/
┃ ┗ cache/
┃   ┗ webpack/
┣ .storybook/
┃ ┣ mocks/
┃ ┃ ┗ next.config.js
┃ ┣ main.js
┃ ┗ preview.js
┣ cypress/
┃ ┣ fixtures/
┃ ┃ ┣ example.json
┃ ┃ ┣ profile.json
┃ ┃ ┗ users.json
┃ ┣ integration/
┃ ┃ ┣ User/
┃ ┃ ┗ examples/
┃ ┣ plugins/
┃ ┃ ┗ index.js
┃ ┣ screenshots/
┃ ┃ ┗ All Integration Specs/
┃ ┗ support/
┃   ┣ commands.js
┃   ┗ index.js
┣ public/
┃ ┗ img/
┣ src/
┃ ┣ _axios/
┃ ┃ ┣ index.ts
┃ ┃ ┗ server.ts
┃ ┣ components/
┃ ┃ ┣ Atoms/
┃ ┃ ┣ Molecules/
┃ ┃ ┣ Organisms/
┃ ┃ ┗ index.ts
┃ ┣ config/
┃ ┃ ┣ constants/
┃ ┃ ┣ formSchemas/
┃ ┃ ┗ index.ts
┃ ┣ hooks/
┃ ┃ ┣ index.ts
┃ ┃ ┣ queries.ts
┃ ┃ ┗ storage.ts
┃ ┣ layouts/
┃ ┃ ┗ AuthLayout.tsx
┃ ┣ pages/
┃ ┃ ┣ api/
┃ ┃ ┣ 404.tsx
┃ ┃ ┣ _app.tsx
┃ ┃ ┣ _document.tsx
┃ ┃ ┣ _error.tsx
┃ ┃ ┣ index.tsx
┃ ┃ ┗ login.tsx
┃ ┣ services/
┃ ┃ ┗ index.ts
┃ ┣ state/
┃ ┃ ┣ hooks/
┃ ┃ ┣ providers/
┃ ┃ ┗ index.ts
┃ ┣ stories/
┃ ┃ ┣ assets/
┃ ┃ ┗ Introduction.stories.mdx
┃ ┣ styles/
┃ ┃ ┣ index.css
┃ ┃ ┗ tailwind.css
┃ ┗ types/
┃   ┣ AuthToken.ts
┃   ┣ Forms.ts
┃   ┣ NextConfig.ts
┃   ┣ User.ts
┃   ┣ index.ts
┃   ┣ queryConfig.ts
┃   ┗ state.ts
┣ .env.local
┣ .env.production
┣ .eslintignore
┣ .eslintrc.js
┣ .gitignore
┣ .nvmrc
┣ .prettierignore
┣ .prettierrc
┣ CHANGELOG.md
┣ ISSUE_TEMPLATE.md
┣ README.md
┣ cypress.json
┣ next-env.d.ts
┣ next.config.js
┣ package.json
┣ postcss.config.js
┣ tailwind.config.js
┣ tsconfig.json
┣ yarn-error.log
┗ yarn.lock
 ```
