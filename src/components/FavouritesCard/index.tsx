import React from 'react';
import { Items } from '../../store/items/types';
import './style.scss';

interface IProps {
  favourite: Items;
}

const FavouritesCard: React.FC<IProps> = ({ favourite }: IProps) => {
  return (
    <>
      <img
        className="favourites__card__img"
        src={favourite.image}
        alt={favourite.title}
      />
      <div className="favourites__card__content">
        <h2 className="favourites__card__title">{favourite.title}</h2>
      </div>
    </>
  );
};

export default FavouritesCard;
