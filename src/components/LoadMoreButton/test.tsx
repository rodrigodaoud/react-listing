import React from 'react';
import { shallow } from 'enzyme';
import LoadMoreButton from './index';

describe('Load More Button', () => {
  it('should be defined', () => {
    expect(LoadMoreButton).toBeDefined();
  });
  it('should render', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<LoadMoreButton loadMoreItems={mockFn} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should be clickable', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<LoadMoreButton loadMoreItems={mockFn} />);
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
