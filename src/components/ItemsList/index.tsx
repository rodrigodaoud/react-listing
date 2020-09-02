import React from 'react';
import { Items } from '../../store/items/types';
import ItemsListCard from '../ItemsListCard';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
  favourites: Items[];
  loadMoreItems: () => void;
  addToFavourites: (item) => void;
}

const ItemsList: React.FC<IProps> = ({
  items,
  favourites,
  loadMoreItems,
  addToFavourites,
}: IProps) => {
  const onClickHandler = (item) => {
    if (!favourites.some((favourite) => favourite.title === item.title)) {
      addToFavourites(item);
    }
  };

  return (
    <div className="items-list__wrapper">
      <ul className="items-list container">
        {items &&
          items.map((item) => (
            <div key={item.title}>
              <ItemsListCard item={item} addToFavourites={addToFavourites} />
              <button type="button" onClick={() => onClickHandler(item)}>
                ADD
              </button>
            </div>
          ))}
      </ul>
      {items.length < 20 ? (
        <LoadMoreButton loadMoreItems={loadMoreItems} />
      ) : null}
    </div>
  );
};

export default ItemsList;
