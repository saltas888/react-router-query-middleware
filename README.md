# react-router-query-middleware

[![Download Count](http://img.shields.io/npm/dm/react-router-query-middleware.svg?style=flat-square)](https://npmjs.org/package/react-router-query-middleware)
[![npm version](https://badge.fury.io/js/react-router-query-middleware.svg)](https://badge.fury.io/js/react-router-query-middleware)

:white_check_mark: A solution for ***[this](https://github.com/ReactTraining/react-router/issues/4410)***

:palm_tree: It adds query object into router reducer when using:
[React Router v4](https://github.com/ReactTraining/react-router)
:heavy_plus_sign: [connected-react-router](https://github.com/supasate/connected-react-router)


### Installation

```sh
$ npm install --save react-router-query-middleware
```
### Simple usage
Add the middleware *after the routerMiddleware* provided from connected-react-router

```js
...
import { routerMiddleware } from 'connected-react-router';
import queryMiddleware from 'react-router-query-middleware';
...
  const middlewares = [
    ...
    thunk, // example middleware
    routerMiddleware(history),// example middleware
    queryMiddleware({}),
    ...
    // Add other middlewares here
  ];
  
applyMiddleware(...middlewares);
...
```
* If you still use [react-router-redux](https://github.com/reactjs/react-router-redux) then install v2.0.2

### Advanced usage
You can configure *the action name that triggers location change* or *the path of location object in triggered action*
```js
...
queryMiddleware({
  actionName: '@@router/LOCATION_CHANGE',
  actionLocationPath: 'payload.location'
});
...
```

### Options
| opt | default | type | description |
| ---- | ---- | ----| ---- |
| actionName | @@router/LOCATION_CHANGE | string | Action name that triggers location change |
| actionLocationPath | payload.location | string | Path of location object in triggered action |

License
----

MIT
