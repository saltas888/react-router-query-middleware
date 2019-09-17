import queryString from 'querystring';
import set from 'lodash.set';

const get = (obj, path, defaultValue) => path.split(".").reduce((a, c) => (a && a[c] ? a[c] : (defaultValue || null)), obj)

export const DEFAULT_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export default function queryMiddleware({
  actionName = DEFAULT_LOCATION_CHANGE,
  actionLocationPath = 'payload.location'
} = {}) {
  return store => next => action => {
    switch (action.type) {
      case actionName: {
        const newLocation = {
          ...get(action, actionLocationPath),
          query: queryString.parse(get(action, `${actionLocationPath}.search`, '').replace('?', ''))
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
