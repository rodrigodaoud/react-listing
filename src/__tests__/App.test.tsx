import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('should display text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div h1');
    expect(text.text()).toBe('Hi from React!');
  });
});
