import { Reducer } from 'redux';
import {
  ItemsState,
  ItemActionTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
} from './types';

export const initialState: ItemsState = {
  loading: false,
  items: [],
};

export const itemsReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemsState => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        loading: false,
        items: action.items,
      };
    case GET_ITEMS_FAIL:
      return {
        loading: false,
        items: null,
      };
    case GET_ITEMS_LOADING:
      return {
        loading: true,
        items: null,
      };
    default:
      return state;
  }
};
