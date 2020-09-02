import React from 'react';
import { Items } from '../../store/items/types';

interface IProps {
  favourite: Items;
}

const FavouritesCard: React.FC<IProps> = ({ favourite }: IProps) => {
  return (
    <div>
      <img src={favourite.image} alt={favourite.title} />
      <h2>{favourite.title}</h2>
      <button type="button">Delete</button>
    </div>
  );
};

export default FavouritesCard;
