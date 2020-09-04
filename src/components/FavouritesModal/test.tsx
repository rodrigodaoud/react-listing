import React from 'react';
import { shallow } from 'enzyme';
import FavouritesModal from '.';
import { Items } from '../../store/items/types';
import { ItemsMock } from '../../data/ItemsMock';

describe('Favourites Modal', () => {
  it('renders with items', () => {
    const filteredFavourites: Items[] = ItemsMock;
    const toggleFavourites = jest.fn();
    const removeFavourite = jest.fn();
    const onSearchFavourites = jest.fn();
    const wrapper = shallow(
      <FavouritesModal
        filteredFavourites={filteredFavourites}
        toggleFavourites={toggleFavourites}
        removeFavourite={removeFavourite}
        onSearchFavourites={onSearchFavourites}
      />
    );
    const favourite: Items = filteredFavourites[0];

    expect(wrapper.exists()).toBe(true);
    expect(favourite).toBeDefined();
  });
});
