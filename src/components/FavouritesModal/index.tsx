import React from 'react';
import { Items } from '../../store/items/types';
import FavouritesCard from '../FavouritesCard';
import './style.scss';

interface IProps {
  favourites: Items[];
  toggleFavourites: () => void;
}

const FavouritesModal: React.FC<IProps> = ({
  favourites,
  toggleFavourites,
}: IProps) => {
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
        {favourites.map((favourite) => (
          <FavouritesCard key={favourite.title} favourite={favourite} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesModal;
