import React from 'react';
import { shallow } from 'enzyme';
import ItemsFilter from '.';

describe('ItemsFilter', () => {
  it('renders with options', () => {
    const sortItems = jest.fn();
    const filterKey = '';
    const wrapper = shallow(
      <ItemsFilter sortItems={sortItems} filterKey={filterKey} />
    );

    expect(wrapper.exists()).toBe(true);
  });
});
