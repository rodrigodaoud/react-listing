import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AppState } from '../store/configureStore';
import {
  Item,
  ItemDispatchTypes,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_LOADING,
} from '../types/items';

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, ItemDispatchTypes>
>;

const getItems: AppThunk = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ITEMS_LOADING,
      });
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl =
        'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';
      const res = await fetch(proxyUrl + targetUrl);
      const resData: Item = await res.json();
      dispatch({
        type: GET_ITEMS_SUCCESS,
        items: resData,
      });
    } catch (err) {
      dispatch({
        type: GET_ITEMS_FAIL,
      });
    }
  };
};

export default getItems;
