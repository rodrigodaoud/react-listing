import React from 'react';
import './style.scss';
import { GiRoundStar } from 'react-icons/gi';

interface IProps {
  toggleFavourites: () => void;
}

const FavouritesButton: React.FC<IProps> = ({ toggleFavourites }: IProps) => {
  return (
    <div className="container">
      <button
        className="favourites__btn"
        type="button"
        onClick={toggleFavourites}
      >
        <GiRoundStar className="favourites__btn-star" />
        Favourites
      </button>
    </div>
  );
};

export default FavouritesButton;
