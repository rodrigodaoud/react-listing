import React from 'react';
import { Items } from '../../store/items/types';
import FavouritesCard from '../FavouritesCard';
import './style.scss';

interface IProps {
  favourites: Items[];
}

const FavouritesModal: React.FC<IProps> = ({ favourites }: IProps) => {
  return (
    <div>
      <h1>My Favourites</h1>
      {favourites.map((favourite) => (
        <FavouritesCard favourite={favourite} />
      ))}
    </div>
  );
};

export default FavouritesModal;
