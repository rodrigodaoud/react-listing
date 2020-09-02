import React from 'react';

interface IProps {
  toggleFavourites: () => void;
}

const FavouritesButton: React.FC<IProps> = ({ toggleFavourites }: IProps) => {
  return (
    <div>
      <button type="button" onClick={toggleFavourites}>
        Favourites
      </button>
    </div>
  );
};

export default FavouritesButton;
