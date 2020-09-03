import {
  Items,
  ItemActionTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_LOADING,
  SEARCH_SUCCESS,
  LOAD_MORE_SUCCESS,
} from './types';

export const getItemsLoading = (): ItemActionTypes => {
  return {
    type: GET_ITEMS_LOADING,
    loading: true,
  };
};

export const getItemsSuccess = (items: Items[]): ItemActionTypes => {
  return {
    type: GET_ITEMS_SUCCESS,
    loading: false,
    items,
  };
};

export const getItemsFail = (): ItemActionTypes => {
  return {
    type: GET_ITEMS_FAIL,
    loading: false,
  };
};

export const searchSuccess = (value: string): ItemActionTypes => {
  return {
    type: SEARCH_SUCCESS,
    value,
  };
};

export const loadMoreSuccess = (): ItemActionTypes => {
  return {
    type: LOAD_MORE_SUCCESS,
    items: [],
  };
};
