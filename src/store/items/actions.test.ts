import {
  Items,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
} from './types';
import { getItemsFail, getItemsLoading, getItemsSuccess } from './actions';
import ItemsMock from '../../data/ItemsMock';

describe('getItemsLoading', () => {
  it('creates ItemLoadingAction', () => {
    const action = getItemsLoading();

    expect(action).toEqual({
      type: GET_ITEMS_LOADING,
      loading: true,
    });
  });
});

describe('getItemsSuccess', () => {
  it('creates ItemSuccessAction', () => {
    const action = getItemsSuccess(ItemsMock);

    expect(action).toEqual({
      type: GET_ITEMS_SUCCESS,
      payload: ItemsMock,
      loading: false,
    });
  });
});

describe('getItemsFail', () => {
  it('creates ItemsFailAction', () => {
    const action = getItemsFail();

    expect(action).toEqual({
      type: GET_ITEMS_FAIL,
      loading: false,
    });
  });
});
