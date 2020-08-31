import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { RootState, TDispatch } from '.';
import {
  getItemsFail,
  getItemsLoading,
  getItemsSuccess,
} from './items/actions';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl =
  'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
const url = proxyUrl + targetUrl;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const getItems = (): AppThunk => async (dispatch: TDispatch) => {
  dispatch(getItemsLoading());
  return axios
    .get(url)
    .then((response) => {
      dispatch(getItemsSuccess(response.data.items));
    })
    .catch((err) => {
      dispatch(getItemsFail());
    });
};

export default getItems;
