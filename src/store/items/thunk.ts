import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, TDispatch } from '../index';
import { getItemsFail, getItemsLoading, getItemsSuccess } from './actions';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl =
  'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
const url = proxyUrl + targetUrl;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const getItems = (): AppThunk => async (dispatch: TDispatch) => {
  dispatch(getItemsLoading());
  return fetch(url)
    .then((res) => res.json())
    .then((body) => dispatch(getItemsSuccess(body.items)))
    .catch((err) => dispatch(getItemsFail()));
};

export default getItems;
