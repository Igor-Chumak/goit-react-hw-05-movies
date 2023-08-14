import PropTypes from 'prop-types';
import { Button, Container } from './CardMovie.styled';
import DEFAULT_IMG from 'images/no_images_available-min.png';
const PATHNAME_MOVIE = 'https://image.tmdb.org/t/p/w500/';
// const DEFAULT_IMG =
//     '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

export const CardMovie = ({ movieData, getGoBack }) => {
  const { poster_path, title, release_date, overview, genres, vote_average } =
    movieData;
  return (
    <Container>
      <Button type="button" onClick={getGoBack}>
        Go back
      </Button>
      <img
        src={poster_path ? `${PATHNAME_MOVIE}${poster_path}` : DEFAULT_IMG}
        alt="poster"
        width={250}
        // height="240"
      />
      <h2>
        {title} ( {release_date.substr(0, 4)} )
      </h2>
      <p>User score: {Math.floor(vote_average)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>
        {genres.map(genre => {
          return genre.name;
        })}
      </p>
    </Container>
  );
};

CardMovie.propTypes = {
  getGoBack: PropTypes.func.isRequired,
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
  }),
};
