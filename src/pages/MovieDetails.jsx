import {
  Loader,
  CardMovie,
  getDataQuery,
  AdditionalInfo,
  Error,
} from 'components';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

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
    console.log('get Go Back');
    // navigate(backLinkHref.current);
  }

  return (
    movieData.id && (
      <div>
        <CardMovie movieData={movieData} getGoBack={getGoBack} />
        <AdditionalInfo />
        {isLoading && <Loader />}
        {isError && <Error error={isError} />}
        <Outlet />
      </div>
    )
  );
};

// const location = useLocation();
// const backLinkHref = useRef(location.state?.from ?? '/movies');
// const navigate = useNavigate();

// <Suspense fallback={<Loader />}>
//   <Outlet />
// </Suspense>;
