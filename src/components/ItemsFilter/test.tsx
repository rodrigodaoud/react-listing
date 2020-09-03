import React from 'react';
import { shallow } from 'enzyme';
import ItemsFilter from '.';
import { Items } from '../../store/items/types';
import { ItemsMock } from '../../data/ItemsMock';

describe('ItemsFilter', () => {
  it('renders with options', () => {
    const sortItems = jest.fn();
    const wrapper = shallow(<ItemsFilter sortItems={sortItems} />);

    expect(wrapper.exists()).toBe(true);
  });
});
