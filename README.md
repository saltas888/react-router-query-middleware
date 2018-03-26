# react-router-query-middleware


 <a href="https://www.npmjs.com/package/react-router"><img src="https://img.shields.io/npm/dm/react-router.svg?style=flat-square"></a>
 
The solution on ***[this](https://github.com/ReactTraining/react-router/issues/4410)***

Adds query object to router reducer when using react-router v4 or higher

### Installation

```sh
$ npm install --save react-router-query-middleware
```
### Usage
Just add the middleware before configuring the redux store
```js
...
import queryMiddleware from 'react-router-query-middleware';
...
  const middlewares = [
    ...
    thunk, // example middleware
    routerMiddleware(history),// example middleware
    queryMiddleware,
    ...
    // Add other middlewares here
  ];
  
applyMiddleware(...middlewares);
...
```
License
----

MIT
