import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Items } from '../../store/items/types';

import './style.scss';

interface IProps {
  item: Items;
  favourites: Items[];
  onAddToFavourites: (item: Items) => void;
}

const ItemsListCard: React.FC<IProps> = ({
  item,
  favourites,
  onAddToFavourites,
}: IProps) => {
  const description =
    item.description.length > 150
      ? `${item.description.substring(0, 150)}...`
      : item.description;

  return (
    <>
      <img className="items-list__image" src={item.image} alt={item.title} />
      <div className="items-list__content">
        <h2 className="items-list__title">{item.title}</h2>
        <p className="items-list__price">${item.price}</p>
        <p className="items-list__description">{description}</p>
        <p className="items-list__email">{item.email}</p>
        <button
          className="items-list__add"
          type="button"
          onClick={() => onAddToFavourites(item)}
        >
          <AiFillStar
            className={`items-list__add-btn ${
              favourites.includes(item) ? 'fill' : ''
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default ItemsListCard;
