import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '.';

describe('Search Bar', () => {
  it('should call onChange prop', () => {
    const onSearchMock = jest.fn();
    const event = {
      target: { value: 'value' },
    };
    const wrapper = shallow(<SearchBar onSearch={onSearchMock} />);
    wrapper.find('input').simulate('change', event);
    expect(onSearchMock).toBeCalledWith('value');
  });
});
