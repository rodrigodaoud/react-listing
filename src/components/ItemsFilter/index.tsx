import React from 'react';
import './style.scss';

interface IProps {
  sortItems: (key: string) => void;
  filterKey: string;
}

const ItemsFilter: React.FC<IProps> = ({ sortItems, filterKey }: IProps) => {
  return (
    <div className="items-filter container">
      Sort by:
      <select
        className="items-filter__selector"
        value={filterKey}
        onChange={(e) => sortItems(e.target.value)}
      >
        <option value="none">---</option>
        <option value="title">Title</option>
        <option value="price">Price</option>
        <option value="description">Description</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default ItemsFilter;
