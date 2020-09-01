import {
  ADD_TO_FAVOURITES_SUCCESS,
  FavouritesActionTypes,
  FavouritesState,
} from './types';

export const initialState: FavouritesState = {
  favourites: [],
};

export const favouritesReducer = (
  state = initialState,
  action: FavouritesActionTypes
): FavouritesState => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_FAVOURITES_SUCCESS:
      return {
        favourites: [...state.favourites, action.favourite],
      };
    default:
      return state;
  }
};
