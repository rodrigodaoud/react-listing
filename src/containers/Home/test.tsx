import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Items } from '../../store/items/types';
import { ItemsMock } from '../../data/ItemsMock';
import { Home } from '.';

interface renderElementParameters {
  getItemsList: jest.Mock;
  items: Items[];
  loading: boolean;
}

const defaultProps: renderElementParameters = {
  getItemsList: jest.fn(),
  items: [],
  loading: false,
};

const renderHomeContainer = (overrides: any): ShallowWrapper => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Home {...defaultProps} {...overrides} />);
};

const mockUseEffect = (): jest.SpyInstance => {
  return jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
};

describe('Home Container', () => {
  describe('On initial render', () => {
    const items: Items[] = [];
    const getItemsList = jest.fn().mockResolvedValue(ItemsMock);
    const loading = false;
    mockUseEffect();
    const wrapper = renderHomeContainer({ items, getItemsList, loading });

    it('call getItemsList()', () => {
      expect(getItemsList).toHaveBeenCalledTimes(1);
    });
  });
});
