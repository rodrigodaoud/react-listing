import { itemsReducer, initialState } from './reducers';
import { getItemsLoading, getItemsSuccess } from './actions';
import { Items } from './types';

const items: Items = {
  title: 'iPhone 6S Oro',
  description:
    'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
  price: '740',
  email: 'iphonemail@wallapop.com',
  image:
    'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
};

describe('items reducer', () => {
  describe('GET_ITEMS_LOADING', () => {
    const newState = itemsReducer(initialState, getItemsLoading());

    it('is fetching', () => {
      expect(newState.loading).toBe(true);
    });
  });

  describe('GET_ITEMS_SUCCESS', () => {
    const newState = itemsReducer(initialState, getItemsSuccess(items));

    it('fetched characters', () => {
      expect(newState.data).toEqual(items);
    });
    it('is not fetching', () => {
      expect(newState.loading).toBe(false);
    });
  });
});
