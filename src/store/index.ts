import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction,
  Store,
} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { favouritesReducer } from './favourites/reducers';
import { itemsReducer } from './items/reducers';

export const rootReducer = combineReducers({
  itemsState: itemsReducer,
  favouritesState: favouritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type TDispatch = ThunkDispatch<RootState, void, AnyAction>;
export type TStore = Store<RootState, AnyAction> & { dispatch: TDispatch };

const store: TStore = createStore(rootReducer, applyMiddleware(thunk));

export default store;
