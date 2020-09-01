import { Items } from '../items/types';

export const ADD_TO_FAVOURITES_SUCCESS = 'ADD_TO_FAVOURITES_SUCCESS';

export interface FavouritesState {
  favourites: Items[];
}

export interface AddToFavourites {
  type: typeof ADD_TO_FAVOURITES_SUCCESS;
  favourite: Items;
}

export type FavouritesActionTypes = AddToFavourites;
