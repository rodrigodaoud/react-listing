import React from 'react';
import { Items } from '../../store/items/types';
import FavouritesCard from '../FavouritesCard';
import SearchBar from '../SearchBar';
import './style.scss';

interface IProps {
  filteredFavourites: Items[];
  toggleFavourites: () => void;
  removeFavourite: (favourite: Items) => void;
  onSearchFavourites: (value: string) => void;
}

const FavouritesModal: React.FC<IProps> = ({
  filteredFavourites,
  toggleFavourites,
  removeFavourite,
  onSearchFavourites,
}: IProps) => {
  const onClickHandler = (favourite: Items) => {
    removeFavourite(favourite);
  };
  return (
    <div className="favourites">
      <div className="favourites__card__wrapper">
        <h1 className="favourites__title">My Favourites</h1>
        <button
          type="button"
          className="favourites__close"
          onClick={toggleFavourites}
        >
          X
        </button>
        <SearchBar onSearch={onSearchFavourites} />
        {filteredFavourites.map((favourite) => (
          <div key={favourite.title} className="favourites__card">
            <FavouritesCard favourite={favourite} />
            <button
              className="favourites__remove"
              type="button"
              onClick={() => onClickHandler(favourite)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesModal;
