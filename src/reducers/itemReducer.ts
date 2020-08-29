import {
  Item,
  ItemDispatchTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
} from '../types/items';

interface initialStateI {
  loading: boolean;
  items?: Item;
}

const initialState: initialStateI = {
  loading: false,
};

const itemsReducer = (
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
      };
    case GET_ITEMS_LOADING:
      return {
        loading: true,
      };
    default:
      return state;
  }
};

export default itemsReducer;
