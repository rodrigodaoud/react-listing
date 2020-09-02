import React from 'react';
import { shallow } from 'enzyme';
import { Items } from '../../store/items/types';
import { ItemMock } from '../../data/ItemsMock';
import FavouritesCard from '.';

describe('Favourites Card', () => {
  let favourite: Items;
  let wrapper;
  beforeEach(() => {
    favourite = ItemMock;
    wrapper = shallow(<FavouritesCard favourite={favourite} />);
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display favourite data', () => {
    const title = wrapper.find('.favourites__card__title');
    expect(title.text()).toEqual(favourite.title);

    const image = wrapper.find('.favourites__card__img');
    expect(image.prop('src')).toEqual(favourite.image);
  });
});
