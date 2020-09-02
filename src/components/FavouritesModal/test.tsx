import React from 'react';
import { shallow } from 'enzyme';
import FavouritesModal from '.';
import { Items } from '../../store/items/types';
import { ItemsMock } from '../../data/ItemsMock';

describe('Favourites Modal', () => {
  it('renders with items', () => {
    const favourites: Items[] = ItemsMock;
    const toggleFavourites = jest.fn();
    const removeFavourite = jest.fn();
    const wrapper = shallow(
      <FavouritesModal
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        removeFavourite={removeFavourite}
      />
    );
    const favourite: Items = favourites[0];

    expect(wrapper.exists()).toBe(true);
    expect(favourite).toBeDefined();
  });
});
