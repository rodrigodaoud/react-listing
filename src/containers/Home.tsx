import React, { useState } from 'react';
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
  }, []);

  const [itemsLength, setItemsLength] = useState(5);
  const slicedItems = items.slice(0, itemsLength);

  const loadMoreItems = () => {
    if (slicedItems.length < items.length) {
      setItemsLength(itemsLength + 5);
    }
  };

  return (
    <div>
      <ItemsList items={slicedItems} loadMoreItems={loadMoreItems} />
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
