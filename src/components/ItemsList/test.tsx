import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from '.';
import { Items } from '../../store/items/types';
import { ItemsMock } from '../../data/ItemsMock';

describe('ItemsList', () => {
  it('renders with items', () => {
    const items: Items[] = ItemsMock;
    const favourites: Items[] = ItemsMock;
    const loadMoreItems = jest.fn();
    const onAddToFavourites = jest.fn();
    const wrapper = shallow(
      <ItemsList
        items={items}
        favourites={favourites}
        loadMoreItems={loadMoreItems}
        onAddToFavourites={onAddToFavourites}
      />
    );
    const item: Items = items[0];

    expect(wrapper.exists()).toBe(true);
    expect(item).toBeDefined();
  });
});
