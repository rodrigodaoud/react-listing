import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import getItems from '../thunk';
import ItemsMock from '../../../data/ItemsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('getItems', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_ITEMS_SUCCESS when fetching items has been done', () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl =
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
    fetchMock.getOnce(proxyUrl + targetUrl, {
      items: ItemsMock,
      headers: { 'Content-Type': 'application/json' },
    });

    const expectedActions = [
      { type: 'GET_ITEMS_LOADING', loading: true },
      { type: 'GET_ITEMS_SUCCESS', loading: false, items: ItemsMock },
    ];

    const store = mockStore({ items: [] });

    return store.dispatch(getItems()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
