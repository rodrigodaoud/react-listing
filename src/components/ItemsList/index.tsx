import React from 'react';
import { Items } from '../../store/items/types';
import ItemsListCard from '../ItemsListCard';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
  loadMoreItems: () => void;
  addToFavourites: (item) => void;
}

const ItemsList: React.FC<IProps> = ({
  items,
  loadMoreItems,
  addToFavourites,
}: IProps) => {
  return (
    <div className="items-list__wrapper">
      <ul className="items-list container">
        {items &&
          items.map((item) => (
            <ItemsListCard
              key={item.title}
              item={item}
              addToFavourites={addToFavourites}
            />
          ))}
      </ul>
      {items.length < 20 ? (
        <LoadMoreButton loadMoreItems={loadMoreItems} />
      ) : null}
    </div>
  );
};

export default ItemsList;
