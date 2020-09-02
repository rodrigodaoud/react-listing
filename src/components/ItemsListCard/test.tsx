import React from 'react';
import { shallow } from 'enzyme';
import { Items } from '../../store/items/types';
import { ItemMock } from '../../data/ItemsMock';
import ItemsListCard from '.';

describe('Items List Card', () => {
  let item: Items;
  let wrapper;
  beforeEach(() => {
    item = ItemMock;
    wrapper = shallow(<ItemsListCard item={item} />);
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should display item data', () => {
    const title = wrapper.find('.items-list__title');
    expect(title.text()).toEqual(item.title);

    const email = wrapper.find('.items-list__email');
    expect(email.text()).toEqual(item.email);

    const image = wrapper.find('.items-list__image');
    expect(image.prop('src')).toEqual(item.image);

    const price = wrapper.find('.items-list__price');
    expect(price.text()).toEqual(`$${item.price}`);
  });
});
