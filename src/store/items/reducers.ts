import {
  ItemsState,
  ItemActionTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
} from './types';

export const initialState: ItemsState = {
  loading: false,
  data: null,
};

export const itemsReducer = (
  state = initialState,
  action: ItemActionTypes
): ItemsState => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ITEMS_FAIL:
      return {
        loading: false,
        data: null,
      };
    case GET_ITEMS_LOADING:
      return {
        loading: true,
        data: null,
      };
    default:
      return state;
  }
};
