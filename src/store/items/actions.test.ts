import {
  Items,
  GET_ITEMS_LOADING,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
} from './types';
import { getItemsFail, getItemsLoading, getItemsSuccess } from './actions';

const items: Items = {
  title: 'iPhone 6S Oro',
  description:
    'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
  price: '740',
  email: 'iphonemail@wallapop.com',
  image:
    'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png',
};

describe('getItemsLoading', () => {
  it('creates ItemLoadingAction', () => {
    const action = getItemsLoading();

    expect(action).toEqual({
      type: GET_ITEMS_LOADING,
      loading: true,
    });
  });
});

describe('getItemsSuccess', () => {
  it('creates ItemSuccessAction', () => {
    const action = getItemsSuccess(items);

    expect(action).toEqual({
      type: GET_ITEMS_SUCCESS,
      payload: items,
      loading: false,
    });
  });
});

describe('getItemsFail', () => {
  it('creates ItemsFailAction', () => {
    const action = getItemsFail();

    expect(action).toEqual({
      type: GET_ITEMS_FAIL,
      loading: false,
    });
  });
});
