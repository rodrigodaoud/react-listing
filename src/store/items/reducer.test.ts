import { itemsReducer, initialState } from './reducers';
import { getItemsLoading, getItemsSuccess } from './actions';
import ItemsMock from '../../data/ItemsMock';

describe('items reducer', () => {
  describe('GET_ITEMS_LOADING', () => {
    const newState = itemsReducer(initialState, getItemsLoading());

    it('is fetching', () => {
      expect(newState.loading).toBe(true);
    });
  });

  describe('GET_ITEMS_SUCCESS', () => {
    const newState = itemsReducer(initialState, getItemsSuccess(ItemsMock));

    it('fetched characters', () => {
      expect(newState.items).toEqual(ItemsMock);
    });
    it('is not fetching', () => {
      expect(newState.loading).toBe(false);
    });
  });
});
