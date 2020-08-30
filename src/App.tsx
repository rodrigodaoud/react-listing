import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, TDispatch } from './store';
import getItems from './thunk';

const App: React.FC = () => {
  const items = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  console.log(items);

  return (
    <div>
      <h1>Hi from React!</h1>
    </div>
  );
};

export default App;
