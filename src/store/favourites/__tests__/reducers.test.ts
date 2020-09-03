import { favouritesReducer, initialState } from '../reducers';
import { addToFavouritesSuccess, removeFavouriteSuccess } from '../actions';
import { ItemMock, ItemsMock } from '../../../data/ItemsMock';

describe('Items Reducer', () => {
  it('should handle ADD_TO_FAVOURITES_SUCCESS', () => {
    const newState = favouritesReducer(
      initialState,
      addToFavouritesSuccess(ItemMock)
    );
    expect(newState.favourites).toStrictEqual(ItemsMock);
  });
  it('should handle REMOVE_FAVOURITE_SUCCESS', () => {
    const newState = favouritesReducer(
      initialState,
      removeFavouriteSuccess(ItemMock)
    );
    expect(newState.favourites).toEqual([]);
  });
});
