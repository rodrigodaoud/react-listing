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
    case GET_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.items,
      };
    default:
      return state;
  }
};
