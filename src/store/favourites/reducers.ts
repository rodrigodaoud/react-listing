import {
  ADD_TO_FAVOURITES_SUCCESS,
  REMOVE_FAVOURITE_SUCCESS,
  FavouritesActionTypes,
  FavouritesState,
  SEARCH_FAVOURITES_SUCCESS,
} from './types';

export const initialState: FavouritesState = {
  favourites: [],
  filteredFavourites: [],
};

export const favouritesReducer = (
  state = initialState,
  action: FavouritesActionTypes
): FavouritesState => {
  switch (action.type) {
    case ADD_TO_FAVOURITES_SUCCESS:
      return {
        favourites: [...state.favourites, action.favourite],
        filteredFavourites: [...state.favourites, action.favourite],
      };
    case REMOVE_FAVOURITE_SUCCESS:
      return {
        favourites: [
          ...state.favourites.filter(
            (favourite) => favourite !== action.favourite
          ),
        ],
        filteredFavourites: [
          ...state.favourites.filter(
            (favourite) => favourite !== action.favourite
          ),
        ],
      };
    case SEARCH_FAVOURITES_SUCCESS: {
      return {
        ...state,
        filteredFavourites: [
          ...state.favourites.filter((item) =>
            item.title.toLowerCase().includes(action.value.toLowerCase())
          ),
        ],
      };
    }
    default:
      return state;
  }
};
