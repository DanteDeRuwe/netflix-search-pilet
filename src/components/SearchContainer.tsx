import * as React from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

const apiKey = '87dfa1c669eea853da609d4968d294be';

const App: React.FC = () => {
  const [searchUrl, setSearchUrl] = React.useState('');

  return (
    <div>
      <Search onSearchChange={setSearchUrl} />
      <SearchResults searchUrl={searchUrl}></SearchResults>
    </div>
  );
};

export default App;
