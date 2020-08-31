import {
  Items,
  ItemActionTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_LOADING,
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
