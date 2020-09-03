import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './style.scss';

interface IProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<IProps> = ({ onSearch }: IProps) => {
  return (
    <div className="search-bar container">
      <AiOutlineSearch className="search-bar__icon" />
      <input
        className="search-bar__input"
        placeholder="What are you looking for..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
