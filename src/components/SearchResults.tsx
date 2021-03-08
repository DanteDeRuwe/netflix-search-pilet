import * as React from 'react';
import { MovieTileProps } from '../models/MovieTileProps';
import TitleList from './TitleList';

export interface SearchResultsProps {
  searchUrl: string;
  MovieTile: React.FC<MovieTileProps>;
}

const SearchResults: React.FC<SearchResultsProps> = props => {
  return props.searchUrl ? (
    <div className="SearchResults">
      <TitleList title="Search Results" url={props.searchUrl} MovieTile={props.MovieTile} />
    </div>
  ) : null;
};

export default SearchResults;
