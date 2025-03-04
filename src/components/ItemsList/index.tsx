import React from 'react';

import { Items } from '../../store/items/types';

import ItemsListCard from '../ItemsListCard';
import ItemsFilter from '../ItemsFilter';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
  favourites: Items[];
  filterKey: string;
  loadMoreItems: () => void;
  onAddToFavourites: (item: Items) => void;
  sortItems: (key: string) => void;
}

const ItemsList: React.FC<IProps> = ({
  items,
  favourites,
  filterKey,
  loadMoreItems,
  onAddToFavourites,
  sortItems,
}: IProps) => {
  return (
    <div className="items-list__wrapper">
      <ItemsFilter sortItems={sortItems} filterKey={filterKey} />
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
