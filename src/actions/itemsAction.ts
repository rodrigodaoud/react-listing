import axios from 'axios';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, TDispatch } from '../store/configureStore';
import {
  ItemDispatchTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_LOADING,
} from '../types/items';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl =
  'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
const url = proxyUrl + targetUrl;

export type AppThunk = ActionCreator<
  ThunkAction<void, RootState, null, ItemDispatchTypes>
>;

export const getItems: AppThunk = () => {
  return async (dispatch: TDispatch) => {
    dispatch({ type: GET_ITEMS_LOADING });
    return axios
      .get(url)
      .then((response) => {
        dispatch({
          type: GET_ITEMS_SUCCESS,
          items: response.data,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_ITEMS_FAIL });
      });
  };
};
