import React from 'react';
import { connect } from 'react-redux';

import getItems from '../store/items/thunk';
import { Items } from '../store/items/types';

import ItemsList from '../components/ItemsList';
import { RootState } from '../store';

interface IProps {
  items: Items[];
  loading: boolean;
  getItemsList: () => void;
}

export const Home: React.FC<IProps> = ({
  items,
  loading,
  getItemsList,
}: IProps) => {
  React.useEffect(() => {
    getItemsList();
  }, [getItemsList]);

  return (
    <div>
      <ItemsList items={items} />
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  return {
    items: store.itemsState.items,
    loading: store.itemsState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
