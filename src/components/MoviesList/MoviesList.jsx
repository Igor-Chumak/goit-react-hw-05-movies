import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  // const location = useLocation();
  return (
    <div>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

// <Link to={`/movies/${movie.id}`} state={{ from: location }}>
