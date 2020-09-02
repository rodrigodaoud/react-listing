import React from 'react';
import { Items } from '../../store/items/types';
import FavouritesCard from '../FavouritesCard';
import './style.scss';

interface IProps {
  favourites: Items[];
  toggleFavourites: () => void;
  removeFavourite: (favourite: Items) => void;
}

const FavouritesModal: React.FC<IProps> = ({
  favourites,
  toggleFavourites,
  removeFavourite,
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
        {favourites.map((favourite) => (
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
