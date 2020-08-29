export const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export type Item = {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
};

export interface ItemLoading {
  type: typeof GET_ITEMS_LOADING;
}

export interface ItemFail {
  type: typeof GET_ITEMS_FAIL;
}

export interface ItemSuccess {
  type: typeof GET_ITEMS_SUCCESS;
  items: Item;
}

export type ItemDispatchTypes = ItemFail | ItemSuccess | ItemLoading;
