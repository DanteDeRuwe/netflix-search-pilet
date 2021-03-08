import * as React from 'react';
import { MovieTileProps } from '../models/MovieTileProps';
import Search from './Search';
import SearchResults from './SearchResults';

const apiKey = '87dfa1c669eea853da609d4968d294be';

interface SearchContainerProps {
  MovieTile: React.FC<MovieTileProps>;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ MovieTile }) => {
  const [searchUrl, setSearchUrl] = React.useState('');

  return (
    <div>
      <Search onSearchChange={setSearchUrl} />
      <SearchResults searchUrl={searchUrl} MovieTile={MovieTile}></SearchResults>
    </div>
  );
};

export default SearchContainer;
