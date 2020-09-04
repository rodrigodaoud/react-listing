import { Items } from '../items/types';
import {
  ADD_TO_FAVOURITES_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  SEARCH_FAVOURITES_SUCCESS,
  FavouritesActionTypes,
} from './types';

export const addToFavouritesSuccess = (
  favourite: Items
): FavouritesActionTypes => {
  return {
    type: ADD_TO_FAVOURITES_SUCCESS,
    favourite,
  };
};

export const removeFavouriteSuccess = (
  favourite: Items
): FavouritesActionTypes => {
  return {
    type: REMOVE_FAVOURITE_SUCCESS,
    favourite,
  };
};

export const searchFavouritesSuccess = (
  value: string
): FavouritesActionTypes => {
  return {
    type: SEARCH_FAVOURITES_SUCCESS,
    value,
  };
};
