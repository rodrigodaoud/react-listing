import { GET_ITEMS_LOADING, GET_ITEMS_SUCCESS } from '../types/items';
import { itemsReducer, initialState } from './itemsReducer';

const items = [
  {
    title: 'iPhone 6S Oro',
    description:
      'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
    price: '740',
    email: 'iphonemail@wallapop.com',
    image:
      'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
  },
];

describe('items reducer', () => {
  it('should return the initial state', () => {
    expect(itemsReducer(undefined, {} as any)).toEqual(initialState);
  });

  describe('GET_ITEMS_LOADING', () => {
    const newState = itemsReducer(initialState, {
      type: GET_ITEMS_LOADING,
      loading: true,
    } as any);

    it('is fetching', () => {
      expect(newState.loading).toBe(true);
    });
  });

  describe('GET_ITEMS_SUCCESS', () => {
    const newState = itemsReducer(initialState, {
      type: GET_ITEMS_SUCCESS,
      loading: false,
      items,
    } as any);

    it('fetched characters', () => {
      expect(newState.items).toEqual(items);
    });
    it('is not fetching', () => {
      expect(newState.loading).toBe(false);
    });
  });
});
