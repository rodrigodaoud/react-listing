import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from '.';
import { Items } from '../../store/items/types';
import ItemsMock from '../../data/ItemsMock';

describe('ItemsList', () => {
  it('renders', () => {
    const items: Items[] = [];
    const wrapper = shallow(<ItemsList items={items} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders with items', () => {
    const items: Items[] = ItemsMock;
    const wrapper = shallow(<ItemsList items={items} />);
    const item: Items = items[0];

    expect(item).toBeDefined();
  });
});
