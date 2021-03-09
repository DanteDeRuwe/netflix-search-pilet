import * as React from 'react';
import { debounce } from '../utils/debounce';

export interface SearchProps {
  onSearchChange: Function;
}

const apiKey = '87dfa1c669eea853da609d4968d294be';

const Search: React.FC<SearchProps> = props => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleKeyUp = React.useCallback(
    e => {
      if (searchTerm === '') {
        props.onSearchChange(null);
        return;
      }

      handleSearch(searchTerm);
    },
    [searchTerm, props.onSearchChange]
  );

  const handleSearch = React.useCallback(
    debounce(value => {
      var searchUrl = 'search/multi?query=' + value + '&api_key=' + apiKey;
      props.onSearchChange(searchUrl);
    }, 500),
    []
  );

  const handleChange = React.useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div id="search" className="Search">
      <input
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        onFocus={handleKeyUp}
        type="search"
        placeholder="Search for a title..."
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
