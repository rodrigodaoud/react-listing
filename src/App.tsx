import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getItems from './actions/items';
import { AppState } from './store/configureStore';

const App: React.FC = () => {
  const items = useSelector((state: AppState) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div>
      <h1>Hi from React!</h1>
    </div>
  );
};

export default App;
