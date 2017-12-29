# React-SSR
An example WebApp that implements server-side rendering of React  
I created this repo starting from https://github.com/StephenGrider/ReactSSRCasts.

## How to use:

* Download repo
* Run "yarn dev" to build for dev
* Run "yarn release" to build for prod
* ???
* Profit

## Libraries
This library uses the following libraries and tools:

#### Core
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://github.com/facebook/react) & [React DOM](https://github.com/facebook/react) for views.
- [React Router](https://github.com/reactjs/react-router) to handle in-app routing.
- [Redux](https://github.com/reactjs/redux) for managing application state.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.

#### Utilities
- [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) with [ES6-Promise](https://github.com/stefanpenner/es6-promise) for using fetch api on both client & server side.
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [React Helmet](https://github.com/nfl/react-helmet)

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [Isomorphic Style Loader](https://github.com/kriasoft/isomorphic-style-loader) for loading styles on server-side.
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)

#### Dev & Prod Server
- [Express](https://github.com/expressjs/express) for running server both on client and server side.
- [Compression](https://github.com/expressjs/compression) for gzip compression

#### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [Redux DevTools](https://github.com/gaearon/redux-devtools)

## Next Steps

* PostCSS
* Add aliases... it's embarassing (eventually)
* sass using css modules
* avoid double API call server + client
* purecomponents
* performance webpack plugin
* Jest
* PM2
* Apollo + GraphQL ?
* Storybook
* Babel AFTER Typescript
* install babel-plugin-transform-react-constant-elements and babel-plugin-transform-react-inline-elements 
* strict Typescript
* a violent TSLint
* prefetch other bundles?
* a violent editorconfig
