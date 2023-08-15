import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Error,
  Loader,
  MoviesList,
  FormSearch,
  getDataQuery,
} from 'components';

Notify.init({
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  timeout: '2000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  closeButton: true,
  opacity: 1,
  warning: {
    background: '#af3e86',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.466)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getDataQuery({ typeRequest: 'searchMovies', query })
      .then(response => {
        return response.results.length !== 0
          ? setMoviesList(response.results)
          : Notify.warning('Sorry, no results were found for your search');
      })
      .catch(error => {
        Notify.warning(error.message);
        return setIsError(error.message);
      })
      .finally(setIsLoading(false));
  }, [query]);

  return (
    <div>
      <FormSearch setSearchParams={setSearchParams} />
      <MoviesList movies={moviesList} />
      {isLoading && <Loader />}
      {isError && <Error textError={`${isError} on Server. Sorry...`} />}
    </div>
  );
};
