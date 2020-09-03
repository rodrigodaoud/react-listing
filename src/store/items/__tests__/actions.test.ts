import {
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  SEARCH_SUCCESS,
  SORT_ITEMS_SUCCESS,
  LOAD_MORE_SUCCESS,
} from '../types';
import {
  getItemsFail,
  getItemsLoading,
  getItemsSuccess,
  loadMoreSuccess,
  searchSuccess,
  sortItemsSuccess,
} from '../actions';
import { ItemsMock } from '../../../data/ItemsMock';

describe('Items Action', () => {
  it('creates ItemLoadingAction', () => {
    const action = getItemsLoading();
    expect(action).toEqual({
      type: GET_ITEMS_LOADING,
      loading: true,
    });
  });
  it('creates ItemsFailAction', () => {
    const action = getItemsFail();
    expect(action).toEqual({
      type: GET_ITEMS_FAIL,
      loading: false,
    });
  });
  it('creates ItemSuccessAction', () => {
    const action = getItemsSuccess(ItemsMock);
    expect(action).toEqual({
      type: GET_ITEMS_SUCCESS,
      items: ItemsMock,
      loading: false,
    });
  });
  it('creates searchSuccessAction', () => {
    const action = searchSuccess('');
    expect(action).toEqual({
      type: SEARCH_SUCCESS,
      value: '',
    });
  });
  it('creates sortItemsSuccessAction', () => {
    const action = sortItemsSuccess('');
    expect(action).toEqual({
      type: SORT_ITEMS_SUCCESS,
      key: '',
    });
  });
  it('creates loadMoreSuccessAction', () => {
    const action = loadMoreSuccess();
    expect(action).toEqual({
      type: LOAD_MORE_SUCCESS,
      items: [],
    });
  });
});
