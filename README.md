# react-router-query-middleware

The solution on ***[this](https://nodesource.com/products/nsolid)***

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
