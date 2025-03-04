import {
  ItemsState,
  ItemActionTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  SEARCH_SUCCESS,
  LOAD_MORE_SUCCESS,
  SORT_ITEMS_SUCCESS,
} from './types';

export const initialState: ItemsState = {
  loading: false,
  items: [],
  slicedItems: [],
  filteredItems: [],
  pageOffset: 5,
  key: '',
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
        slicedItems: action.items.slice(0, state.pageOffset),
        filteredItems: action.items.slice(0, state.pageOffset),
      };
    case LOAD_MORE_SUCCESS: {
      const sliceTo = state.pageOffset + 5;
      return {
        ...state,
        slicedItems: [...state.items.slice(0, sliceTo)],
        filteredItems: [...state.items.slice(0, sliceTo)],
        pageOffset: sliceTo,
        key: '',
      };
    }
    case SORT_ITEMS_SUCCESS: {
      const { key } = action;
      return {
        ...state,
        filteredItems: [
          ...state.filteredItems.sort((a, b) => {
            let comparison = 0;
            if (key === 'none') return comparison;
            let valueA = a[key].toUpperCase();
            let valueB = b[key].toUpperCase();

            if (key === 'price') {
              valueA = Number(valueA);
              valueB = Number(valueB);
            }

            if (valueA > valueB) comparison = 1;
            if (valueA < valueB) comparison = -1;
            return comparison;
          }),
        ],
        key: action.key,
      };
    }
    case SEARCH_SUCCESS: {
      return {
        ...state,
        filteredItems: [
          ...state.slicedItems.filter((item) =>
            item.title.toLowerCase().includes(action.value.toLowerCase())
          ),
        ],
      };
    }
    default:
      return state;
  }
};
