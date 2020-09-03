import React from 'react';

interface IProps {
  sortItems: (key: string) => void;
}

const ItemsFilter: React.FC<IProps> = ({ sortItems }: IProps) => {
  return (
    <div>
      Sort by:
      <select value="" onChange={(e) => sortItems(e.target.value)}>
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
