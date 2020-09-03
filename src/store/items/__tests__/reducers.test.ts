import { itemsReducer, initialState } from '../reducers';
import {
  getItemsFail,
  getItemsLoading,
  getItemsSuccess,
  loadMoreSuccess,
  searchSuccess,
  sortItemsSuccess,
} from '../actions';
import { ItemsMock } from '../../../data/ItemsMock';

describe('Items Reducer', () => {
  it('should handle GET_ITEMS_LOADING', () => {
    const newState = itemsReducer(initialState, getItemsLoading());
    expect(newState.loading).toBe(true);
  });
  it('should handle GET_ITEMS_SUCCESS', () => {
    const newState = itemsReducer(initialState, getItemsSuccess(ItemsMock));
    expect(newState.items).toEqual(ItemsMock);
    expect(newState.loading).toBe(false);
  });
  it('should handle GET_ITEMS_FAIL', () => {
    const newState = itemsReducer(initialState, getItemsFail());
    expect(newState.loading).toBe(false);
  });
  it('should handle SEARCH_SUCCESS', () => {
    const newState = itemsReducer(initialState, searchSuccess(''));
    expect(newState.filteredItems).toEqual([]);
  });
  it('should handle LOAD_MORE_SUCCESS', () => {
    const newState = itemsReducer(initialState, loadMoreSuccess());
    expect(newState.slicedItems).toEqual([]);
    expect(newState.filteredItems).toEqual([]);
  });
  it('should handle SORT_ITEMS_SUCCESS', () => {
    const newState = itemsReducer(initialState, sortItemsSuccess('price'));
    expect(newState.filteredItems).toEqual([]);
  });
});
