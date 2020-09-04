import React, { useState } from 'react';
import { connect } from 'react-redux';

import getItems from '../../store/items/thunk';
import { Items } from '../../store/items/types';
import { RootState } from '../../store';
import {
  addToFavouritesSuccess,
  removeFavouriteSuccess,
} from '../../store/favourites/actions';
import {
  loadMoreSuccess,
  searchSuccess,
  sortItemsSuccess,
} from '../../store/items/actions';

import ItemsList from '../../components/ItemsList';
import FavouritesModal from '../../components/FavouritesModal';
import FavouritesButton from '../../components/FavouritesButton';
import SearchBar from '../../components/SearchBar';

import Logo from '../../assets/wallapop-logo.png';
import './style.scss';

interface IProps {
  items: Items[];
  favourites: Items[];
  filteredItems: Items[];
  filterKey: string;
  getItemsList: () => void;
  addToFavourites: (item: Items) => void;
  removeFavourite: (favourite: Items) => void;
  onSearch: (value: string) => void;
  sortItems: (key: string) => void;
  loadMore: () => void;
}

export const Home: React.FC<IProps> = ({
  items,
  favourites,
  filteredItems,
  filterKey,
  getItemsList,
  addToFavourites,
  removeFavourite,
  onSearch,
  sortItems,
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
      <div className="home__logo container">
        <img className="home__logo-img" src={Logo} alt="wallapop" />
      </div>
      <SearchBar onSearch={onSearch} />
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
        filterKey={filterKey}
        loadMoreItems={loadMoreItems}
        onAddToFavourites={onAddToFavourites}
        sortItems={sortItems}
      />
    </div>
  );
};

const mapStateToProps = (store: RootState) => {
  return {
    items: store.itemsState.items,
    filteredItems: store.itemsState.filteredItems,
    loading: store.itemsState.loading,
    filterKey: store.itemsState.key,
    favourites: store.favouritesState.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItems()),
    addToFavourites: (item: Items) => dispatch(addToFavouritesSuccess(item)),
    removeFavourite: (favourite: Items) =>
      dispatch(removeFavouriteSuccess(favourite)),
    onSearch: (value: string) => dispatch(searchSuccess(value)),
    sortItems: (key) => dispatch(sortItemsSuccess(key)),
    loadMore: () => dispatch(loadMoreSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
