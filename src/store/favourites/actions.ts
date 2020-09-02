import { Items } from '../items/types';
import {
  ADD_TO_FAVOURITES_SUCCESS,
  FavouritesActionTypes,
  REMOVE_FAVOURITE_SUCCESS,
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
