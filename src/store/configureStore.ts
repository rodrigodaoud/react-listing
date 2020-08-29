import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import itemsReducer from '../reducers/itemReducer';

export const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof rootReducer>;

export default store;
