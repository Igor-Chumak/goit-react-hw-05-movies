import {
  Loader,
  CardMovie,
  getDataQuery,
  AdditionalInfo,
  Error,
} from 'components';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const backLink = useRef(location.state?.from ?? '/').current;

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    getDataQuery({ typeRequest: 'movieDetails', movie_id: movieId })
      .then(response => {
        return setMovieData(response);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  function getGoBack() {
    navigate(backLink);
  }

  return (
    movieData.id && (
      <div>
        <CardMovie movieData={movieData} getGoBack={getGoBack} />
        <AdditionalInfo />
        {isLoading && <Loader />}
        {isError && <Error textError={`${isError} on Server. Sorry...`} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetailsPage;
