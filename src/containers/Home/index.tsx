import React, { useState } from 'react';
import { connect } from 'react-redux';

import getItems from '../../store/items/thunk';
import { Items } from '../../store/items/types';
import { RootState } from '../../store';
import {
  addToFavouritesSuccess,
  removeFavouriteSuccess,
  searchFavouritesSuccess,
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
  filteredFavourites: Items[];
  getItemsList: () => void;
  addToFavourites: (item: Items) => void;
  removeFavourite: (favourite: Items) => void;
  onSearch: (value: string) => void;
  onSearchFavourites: (value: string) => void;
  sortItems: (key: string) => void;
  loadMore: () => void;
}

export const Home: React.FC<IProps> = ({
  items,
  favourites,
  filteredItems,
  filterKey,
  filteredFavourites,
  getItemsList,
  addToFavourites,
  removeFavourite,
  onSearch,
  onSearchFavourites,
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
      <div className="home__header">
        <SearchBar onSearch={onSearch} />
        <FavouritesButton toggleFavourites={toggleFavourites} />
      </div>
      {toggleModal ? (
        <FavouritesModal
          filteredFavourites={filteredFavourites}
          toggleFavourites={toggleFavourites}
          removeFavourite={removeFavourite}
          onSearchFavourites={onSearchFavourites}
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
  console.log(store);
  return {
    items: store.itemsState.items,
    filteredItems: store.itemsState.filteredItems,
    loading: store.itemsState.loading,
    filterKey: store.itemsState.key,
    favourites: store.favouritesState.favourites,
    filteredFavourites: store.favouritesState.filteredFavourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItems()),
    addToFavourites: (item: Items) => dispatch(addToFavouritesSuccess(item)),
    removeFavourite: (favourite: Items) =>
      dispatch(removeFavouriteSuccess(favourite)),
    onSearch: (value: string) => dispatch(searchSuccess(value)),
    onSearchFavourites: (value: string) =>
      dispatch(searchFavouritesSuccess(value)),
    sortItems: (key) => dispatch(sortItemsSuccess(key)),
    loadMore: () => dispatch(loadMoreSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
