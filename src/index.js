const queryString = require('query-string');

export default function queryMiddleware() {
  return next => action => {
    switch (action.type) {
      case '@@router/LOCATION_CHANGE': {
        const newPayload = {
          ...action.payload,
          query: queryString.parse(action.payload.search)
        };
        const newAction = {
          ...action,
          payload: newPayload
        };
        return next(newAction);
      }
      default: {
        return next(action);
      }
    }
  };
}