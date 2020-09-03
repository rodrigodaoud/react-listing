import React from 'react';

import { Items } from '../../store/items/types';
import ItemsListCard from '../ItemsListCard';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
  favourites: Items[];
  loadMoreItems: () => void;
  onAddToFavourites: (item) => void;
}

const ItemsList: React.FC<IProps> = ({
  items,
  favourites,
  loadMoreItems,
  onAddToFavourites,
}: IProps) => {
  return (
    <div className="items-list__wrapper">
      <ul className="items-list container">
        {items.map((item) => (
          <li key={item.title} className="items-list__card">
            <ItemsListCard
              item={item}
              favourites={favourites}
              onAddToFavourites={onAddToFavourites}
            />
          </li>
        ))}
      </ul>
      {items.length < 20 ? (
        <LoadMoreButton loadMoreItems={loadMoreItems} />
      ) : null}
    </div>
  );
};

export default ItemsList;
