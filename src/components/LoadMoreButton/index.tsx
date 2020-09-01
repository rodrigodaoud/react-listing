import React from 'react';

import './style.scss';

interface IProps {
  loadMoreItems: () => void;
}

const LoadMoreButton: React.FC<IProps> = ({ loadMoreItems }: IProps) => {
  const onClickHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    loadMoreItems();
  };
  return (
    <div className="item-list__load-wrapper">
      <button
        className="item-list__load-btn"
        type="button"
        onClick={onClickHandler}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
