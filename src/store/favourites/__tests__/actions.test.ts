import { ADD_TO_FAVOURITES_SUCCESS, REMOVE_FAVOURITE_SUCCESS } from '../types';
import { addToFavouritesSuccess, removeFavouriteSuccess } from '../actions';
import { ItemMock, ItemsMock } from '../../../data/ItemsMock';

describe('Items Action', () => {
  it('creates addToFavouritesAction', () => {
    const action = addToFavouritesSuccess(ItemMock);
    expect(action).toEqual({
      type: ADD_TO_FAVOURITES_SUCCESS,
      favourite: ItemMock,
    });
  });
  it('creates removeFavouriteAction', () => {
    const action = removeFavouriteSuccess(ItemMock);
    expect(action).toEqual({
      type: REMOVE_FAVOURITE_SUCCESS,
      favourite: ItemMock,
    });
  });
});
