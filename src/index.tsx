import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import SearchExtension from './components/SearchExtension';
import { MovieTileProps } from './models/proptypes';
import './style.scss';

export function setup(app: PiletApi) {
  const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTile" params={props}></app.Extension>;
  app.registerExtension('search', () => <SearchExtension MovieTile={MovieTile}></SearchExtension>);
}
