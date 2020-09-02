import React from 'react';
import { shallow } from 'enzyme';
import LoadMoreButton from './index';

describe('Load More Button', () => {
  let wrapper;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<LoadMoreButton loadMoreItems={mockFn} />);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should be clickable', () => {
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
