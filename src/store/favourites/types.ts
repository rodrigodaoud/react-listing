import { Items } from '../items/types';

export const ADD_TO_FAVOURITES_SUCCESS = 'ADD_TO_FAVOURITES_SUCCESS';
export const REMOVE_FAVOURITE_SUCCESS = 'REMOVE_FAVOURITE_SUCCESS';
export const SEARCH_FAVOURITES_SUCCESS = 'SEARCH_FAVOURITES_SUCCESS';

export interface FavouritesState {
  favourites: Items[];
  filteredFavourites: Items[];
}

export interface AddToFavourites {
  type: typeof ADD_TO_FAVOURITES_SUCCESS;
  favourite: Items;
}

export interface RemoveFavourite {
  type: typeof REMOVE_FAVOURITE_SUCCESS;
  favourite: Items;
}

export interface SearchFavouritesSuccess {
  type: typeof SEARCH_FAVOURITES_SUCCESS;
  value: string;
}

export type FavouritesActionTypes =
  | AddToFavourites
  | RemoveFavourite
  | SearchFavouritesSuccess;
