import { Loader, getDataQuery } from 'components';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getDataQuery({ typeRequest: 'movieDetails', movie_id: movieId })
      .then(response => {
        return setMovie(response);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    movie.id && (
      <div>
        {/* <CardMovie movie={movie} onGoBack={onGoBack} />
        <AdditionalInfo /> */}

        {isLoading && <Loader />}
        {isError && <div className="error">{isError} on Server. Sorry... </div>}
        <Outlet />
      </div>
    )
  );
};

// const location = useLocation();
// const backLinkHref = useRef(location.state?.from ?? '/movies');
// const navigate = useNavigate();

// function onGoBack() {
//   navigate(backLinkHref.current);
// }

// <Suspense fallback={<Loader />}>
//   <Outlet />
// </Suspense>;
