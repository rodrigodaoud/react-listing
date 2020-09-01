import React from 'react';
import { Items } from '../../store/items/types';
import ItemsListCard from '../ItemsListCard';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
  loadMoreItems: () => void;
}

const ItemsList: React.FC<IProps> = ({ items, loadMoreItems }: IProps) => {
  return (
    <div className="items-list__wrapper">
      <ul className="items-list container">
        {items &&
          items.map((item) => <ItemsListCard key={item.title} item={item} />)}
      </ul>
      {items.length < 20 ? (
        <LoadMoreButton loadMoreItems={loadMoreItems} />
      ) : null}
    </div>
  );
};

export default ItemsList;
