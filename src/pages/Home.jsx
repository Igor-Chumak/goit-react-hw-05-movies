import { Loader, TitleH1, MoviesList, getDataQuery } from 'components';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getDataQuery({ typeRequest: 'getTrending' })
      .then(response => {
        return setMovies(response.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <TitleH1>Trending today</TitleH1>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {isError && <div className="error">{isError} on Server. Sorry... </div>}
    </div>
  );
};
