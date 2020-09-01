import React from 'react';
import { Items } from '../../store/items/types';
import ItemsListCard from '../ItemsListCard';
import LoadMoreButton from '../LoadMoreButton';

import './style.scss';

interface IProps {
  items: Items[];
}

const ItemsList: React.FC<IProps> = ({ items }: IProps) => {
  return (
    <div className="items-list__wrapper">
      <ul className="items-list container">
        {items &&
          items.map((item) => <ItemsListCard key={item.title} item={item} />)}
      </ul>
    </div>
  );
};

export default ItemsList;
