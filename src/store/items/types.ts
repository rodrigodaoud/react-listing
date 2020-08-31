export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export interface Items {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

export interface ItemsState {
  items: Items[];
  loading: boolean;
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

export type ItemActionTypes =
  | ItemFailAction
  | ItemSuccessAction
  | ItemLoadingAction;
