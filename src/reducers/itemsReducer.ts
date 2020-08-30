import {
  Item,
  ItemDispatchTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
} from '../types/items';

export type initialStateI = {
  loading: boolean;
  items?: Item;
};

export const initialState: initialStateI = {
  loading: false,
  items: null,
};

export const itemsReducer = (
  state = initialState,
  action: ItemDispatchTypes
): initialStateI => {
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
