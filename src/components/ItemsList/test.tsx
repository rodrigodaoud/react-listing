import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from '.';
import { Items } from '../../store/items/types';
import ItemsMock from '../../data/ItemsMock';

describe('ItemsList', () => {
  it('renders', () => {
    const items: Items[] = [];
    const loadMoreItems = jest.fn();
    const addToFavourites = jest.fn();
    const wrapper = shallow(
      <ItemsList
        items={items}
        loadMoreItems={loadMoreItems}
        addToFavourites={addToFavourites}
      />
    );

    expect(wrapper.exists()).toBe(true);
  });

  it('renders with items', () => {
    const items: Items[] = ItemsMock;
    const loadMoreItems = jest.fn();
    const addToFavourites = jest.fn();
    const wrapper = shallow(
      <ItemsList
        items={items}
        loadMoreItems={loadMoreItems}
        addToFavourites={addToFavourites}
      />
    );
    const item: Items = items[0];

    expect(item).toBeDefined();
  });
});
