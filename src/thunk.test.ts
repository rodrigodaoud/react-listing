import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import getItems from './thunk';
import ItemsMock from './data/ItemsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  loading: false,
  data: null,
};

describe('getItems', () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatch GET_ITEMS_LOADING and GET_ITEMS_SUCCESS after successfully fetching items', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: ItemsMock,
      });
    });

    const expectedActions = [
      {
        type: 'GET_ITEMS_LOADING',
        loading: true,
      },
      {
        type: 'GET_ITEMS_SUCCESS',
        loading: false,
        payload: ItemsMock,
      },
    ];

    return store.dispatch(getItems()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
