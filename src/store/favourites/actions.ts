import { Items } from '../items/types';
import { ADD_TO_FAVOURITES_SUCCESS, FavouritesActionTypes } from './types';

const addToFavouritesSuccess = (favourite: Items): FavouritesActionTypes => {
  return {
    type: ADD_TO_FAVOURITES_SUCCESS,
    favourite,
  };
};

export default addToFavouritesSuccess;
