import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Link } from 'react-router-dom';
import SearchContainer from './components/SearchContainer';

export function setup(app: PiletApi) {
  app.registerExtension('search', SearchContainer);
}
