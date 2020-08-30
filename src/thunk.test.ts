import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import getItems from './thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  loading: false,
  data: null,
};
const items = [
  {
    title: 'iPhone 6S Oro',
    description:
      'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
    price: '740',
    email: 'iphonemail@wallapop.com',
    image:
      'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  },
];

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
        response: items,
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
        payload: items,
      },
    ];

    return store.dispatch(getItems()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
