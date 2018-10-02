const queryString = require('query-string');
import get from 'lodash.get';
import set from 'lodash.set';

const DEFAULT_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export default function queryMiddleware({
  actionName = DEFAULT_LOCATION_CHANGE,
  actionLocationPath = 'payload.location'
}) {
  return next => action => {
    switch (action.type) {
      case actionName: {
        const newLocation = {
          ...get(action, actionLocationPath),
          query: queryString.parse(get(action, `${actionLocationPath}.search`, ''))
        };

        const newAction = { ...action };
        set(newAction, actionLocationPath, newLocation);

        return next(newAction);
      }
      default: {
        return next(action);
      }
    }
  };
}