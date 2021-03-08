import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Link } from 'react-router-dom';
import SearchContainer from './components/SearchContainer';
import { MovieTileProps } from './models/MovieTileProps';

export function setup(app: PiletApi) {
  const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTile" params={props}></app.Extension>;
  app.registerExtension('search', () => <SearchContainer MovieTile={MovieTile}></SearchContainer>);
}
