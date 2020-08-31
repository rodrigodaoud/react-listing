import React from 'react';
import { Items } from '../store/items/types';

interface IProps {
  items: Items[];
}

const ItemsList: React.FC<IProps> = ({ items }: IProps) => {
  return (
    <ul className="list-group">
      {items && items.map((item) => <p key={item.title}>{item.title}</p>)}
    </ul>
  );
};

export default ItemsList;
