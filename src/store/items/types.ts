export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SORT_ITEMS_SUCCESS = 'SORT_ITEMS_SUCCESS';
export const LOAD_MORE_SUCCESS = 'LOAD_MORE_SUCCESS';

export interface Items {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

export interface ItemsState {
  loading: boolean;
  pageOffset: number;
  items: Items[];
  slicedItems: Items[];
  filteredItems: Items[];
}

export interface ItemLoadingAction {
  type: typeof GET_ITEMS_LOADING;
  loading: boolean;
}

export interface ItemFailAction {
  type: typeof GET_ITEMS_FAIL;
  loading: boolean;
}

export interface ItemSuccessAction {
  type: typeof GET_ITEMS_SUCCESS;
  loading: boolean;
  items: Items[];
}

export interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  value: string;
}

export interface SortItemsSuccessAction {
  type: typeof SORT_ITEMS_SUCCESS;
  key: string;
}

export type LoadMoreSuccessAction = {
  type: typeof LOAD_MORE_SUCCESS;
  items: Items[];
};

export type ItemActionTypes =
  | ItemFailAction
  | ItemSuccessAction
  | ItemLoadingAction
  | SearchSuccessAction
  | SortItemsSuccessAction
  | LoadMoreSuccessAction;
