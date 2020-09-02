import React from 'react';
import { Items } from '../../store/items/types';
import './style.scss';

interface IProps {
  favourite: Items;
}

const FavouritesCard: React.FC<IProps> = ({ favourite }: IProps) => {
  return (
    <div className="favourites__card">
      <img
        className="favourites__card__img"
        src={favourite.image}
        alt={favourite.title}
      />
      <div className="favourites__card__content">
        <h2 className="favourites__card__title">{favourite.title}</h2>
        <button className="favourites__card__remove" type="button">
          X
        </button>
      </div>
    </div>
  );
};

export default FavouritesCard;
