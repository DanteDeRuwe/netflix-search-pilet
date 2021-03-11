import * as React from 'react';
import { SearchExtensionProps } from '../models/proptypes';
import Search from './Search';
import SearchResults from './SearchResults';

const SearchExtension: React.FC<SearchExtensionProps> = ({ MovieTile }) => {
  const [searchUrl, setSearchUrl] = React.useState('');

  return (
    <div>
      <Search onSearchChange={setSearchUrl} />
      <SearchResults searchUrl={searchUrl} MovieTile={MovieTile}></SearchResults>
    </div>
  );
};

export default SearchExtension;
