import React, { useState } from 'react';
import { connect } from 'react-redux';

import getItems from '../../store/items/thunk';
import { Items } from '../../store/items/types';

import ItemsList from '../../components/ItemsList';
import { RootState } from '../../store';
import FavouritesButton from '../../components/FavouritesButton';
import addToFavouritesSuccess from '../../store/favourites/actions';
import FavouritesModal from '../../components/FavouritesModal';

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
  const [toggleModal, setToggleModal] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(false);
  const slicedItems = items.slice(0, itemsLength);

  const loadMoreItems = () => {
    if (slicedItems.length < items.length) {
      setItemsLength(itemsLength + pageOffset);
    }
  };

  const toggleFavourites = () => {
    setToggleModal(!toggleModal);
    setBodyScroll(!bodyScroll);
    if (bodyScroll) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className="home">
      <FavouritesButton toggleFavourites={toggleFavourites} />
      {toggleModal ? (
        <FavouritesModal
          favourites={favourites}
          toggleFavourites={toggleFavourites}
        />
      ) : null}
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
