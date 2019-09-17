import queryMiddleware, { DEFAULT_LOCATION_CHANGE } from '.';

it('should add query to payload for location change action', done => {
  let action = {
    payload: {
      location: {
        search: '?foo=yes&bar=no'
      }
    },
    type: DEFAULT_LOCATION_CHANGE
  };
  const store = {};
  const next = newAction => {
    expect(newAction).toEqual({
      payload: {
        location: {
          query: {
            foo: 'yes',
            bar: 'no'
          },
          search: '?foo=yes&bar=no'
        }
      },
      type: DEFAULT_LOCATION_CHANGE
    });
    done();
  };

  queryMiddleware()(store)(next)(action);
});


it('should not affect by other actions', done => {
  let action = {
    payload: {
      location: {
        search: '?foo=yes&bar=no'
      }
    },
    type: 'ACTION'
  };
  const store = {};
  const next = newAction => {
    expect(newAction).toEqual(action);
    done();
  };

  queryMiddleware()(store)(next)(action);
});

it('should location change action with custom type', done => {
  const customTypeLocationChange = 'LOCATION_CHANGE';
  let action = {
    payload: {
      location: {
        search: '?foo=yes&bar=no'
      }
    },
    type: customTypeLocationChange
  };
  const store = {};
  const next = newAction => {
    expect(newAction).toEqual({
      payload: {
        location: {
          query: {
            foo: 'yes',
            bar: 'no'
          },
          search: '?foo=yes&bar=no'
        }
      },
      type: customTypeLocationChange
    });
    done();
  };

  queryMiddleware({
    actionName: customTypeLocationChange,
    actionLocationPath: 'payload.location'
  })(store)(next)(action);
});