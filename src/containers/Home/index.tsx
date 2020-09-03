import React, { useState } from 'react';
import { connect } from 'react-redux';

import getItems from '../../store/items/thunk';
import { Items } from '../../store/items/types';
import { RootState } from '../../store';
import {
  addToFavouritesSuccess,
  removeFavouriteSuccess,
} from '../../store/favourites/actions';
import { loadMoreSuccess, searchSuccess } from '../../store/items/actions';

import ItemsList from '../../components/ItemsList';
import FavouritesModal from '../../components/FavouritesModal';
import FavouritesButton from '../../components/FavouritesButton';
import SearchBar from '../../components/SearchBar';

interface IProps {
  items: Items[];
  favourites: Items[];
  filteredItems: Items[];
  getItemsList: () => void;
  addToFavourites: (item: Items) => void;
  removeFavourite: (favourite: Items) => void;
  search: (value: string) => void;
  loadMore: () => void;
}

export const Home: React.FC<IProps> = ({
  items,
  favourites,
  filteredItems,
  getItemsList,
  addToFavourites,
  removeFavourite,
  search,
  loadMore,
}: IProps) => {
  React.useEffect(() => {
    getItemsList();
  }, []);

  const [toggleModal, setToggleModal] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(false);

  const loadMoreItems = () => {
    if (filteredItems.length < items.length) {
      loadMore();
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

  const onAddToFavourites = (item: Items) => {
    if (!favourites.some((favourite) => favourite.title === item.title)) {
      addToFavourites(item);
    }
  };

  return (
    <div className="home">
      <SearchBar search={search} />
      <FavouritesButton toggleFavourites={toggleFavourites} />
      {toggleModal ? (
        <FavouritesModal
          favourites={favourites}
          toggleFavourites={toggleFavourites}
          removeFavourite={removeFavourite}
        />
      ) : null}
      <ItemsList
        items={filteredItems}
        favourites={favourites}
        loadMoreItems={loadMoreItems}
        onAddToFavourites={onAddToFavourites}
      />
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  console.log(store);
  return {
    items: store.itemsState.items,
    filteredItems: store.itemsState.filteredItems,
    loading: store.itemsState.loading,
    favourites: store.favouritesState.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItems()),
    addToFavourites: (item) => dispatch(addToFavouritesSuccess(item)),
    removeFavourite: (favourite) => dispatch(removeFavouriteSuccess(favourite)),
    search: (value) => dispatch(searchSuccess(value)),
    loadMore: () => dispatch(loadMoreSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
