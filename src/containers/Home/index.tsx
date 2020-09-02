import React, { useState } from 'react';
import { connect } from 'react-redux';

import getItems from '../../store/items/thunk';
import { Items } from '../../store/items/types';

import ItemsList from '../../components/ItemsList';
import { RootState } from '../../store';
import FavouritesButton from '../../components/FavouritesButton';
import addToFavouritesSuccess from '../../store/favourites/actions';

interface IProps {
  items: Items[];
  favourites: Items[];
  loading: boolean;
  getItemsList: () => void;
  addToFavourites: (item) => void;
}

export const Home: React.FC<IProps> = ({
  items,
  favourites,
  loading,
  getItemsList,
  addToFavourites,
}: IProps) => {
  React.useEffect(() => {
    getItemsList();
  }, []);

  const pageOffset = 5;
  const [itemsLength, setItemsLength] = useState(pageOffset);
  const slicedItems = items.slice(0, itemsLength);

  const loadMoreItems = () => {
    if (slicedItems.length < items.length) {
      setItemsLength(itemsLength + pageOffset);
    }
  };

  return (
    <div>
      <FavouritesButton />
      <ItemsList
        items={slicedItems}
        favourites={favourites}
        loadMoreItems={loadMoreItems}
        addToFavourites={addToFavourites}
      />
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  console.log(store.favouritesState.favourites);
  return {
    items: store.itemsState.items,
    loading: store.itemsState.loading,
    favourites: store.favouritesState.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItems()),
    addToFavourites: (item) => dispatch(addToFavouritesSuccess(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
