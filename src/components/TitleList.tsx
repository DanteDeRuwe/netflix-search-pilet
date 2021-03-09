import * as React from 'react';
import data from '../models/data';
import { MovieTileProps } from '../models/MovieTileProps';

export interface TitleListProps {
  url: string;
  title: string;
  MovieTile: React.FC<MovieTileProps>;
}

const apiKey = '87dfa1c669eea853da609d4968d294be';

const TitleList: React.FC<TitleListProps> = props => {
  const [mounted, setMounted] = React.useState(false);
  const [data, setData] = React.useState<data>({});

  const loadContent = () => {
    let requestUrl = 'https://api.themoviedb.org/3/' + props.url + '&api_key=' + apiKey;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    setMounted(true);
    loadContent();
  }, [props.url]);

  let titles: any[] = [];

  if (data.results) {
    titles = data.results.map((title, i) => {
      if (i >= 5) return <div key={title.id}></div>;

      let backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
      let name = title.name ? title.name : title.original_title;
      return (
        <props.MovieTile
          key={title.id}
          movieId={title.id}
          media_type={title.media_type}
          title={name}
          score={title.vote_average}
          overview={title.overview}
          backdrop={backDrop}
        ></props.MovieTile>
      );
    });
  } else {
    titles = [<p style={{ color: 'gray' }}> nothing was found</p>];
  }

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">{titles}</div>
      </div>
    </div>
  );
};

export default TitleList;
