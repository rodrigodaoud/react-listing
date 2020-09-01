import React from 'react';
import { Items } from '../../store/items/types';

import './style.scss';

interface IProps {
  item: Items;
  addToFavourites: (item) => void;
}

const ItemsListCard: React.FC<IProps> = ({ item, addToFavourites }: IProps) => {
  const description =
    item.description.length > 150
      ? `${item.description.substring(0, 150)}...`
      : item.description;

  const onClickHandler = (e) => {
    addToFavourites(item);
  };

  return (
    <li className="items-list__item">
      <img className="items-list__image" src={item.image} alt={item.title} />
      <div className="items-list__content">
        <h2 className="items-list__title">{item.title}</h2>
        <p className="items-list__price">${item.price}</p>
        <p className="items-list__description">{description}</p>
        <p className="items-list__email">{item.email}</p>
      </div>
      <button type="button" onClick={onClickHandler}>
        ADD
      </button>
    </li>
  );
};

export default ItemsListCard;
