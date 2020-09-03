import React from 'react';

interface IProps {
  search: (value: string) => void;
}

const SearchBar: React.FC<IProps> = ({ search }: IProps) => {
  return (
    <input
      placeholder="What are you looking for..."
      onChange={(e) => search(e.target.value)}
    />
  );
};

export default SearchBar;
