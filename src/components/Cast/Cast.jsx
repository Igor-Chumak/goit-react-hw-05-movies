import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DEFAULT_PHOTO from 'images/no_photo_available.png';
import { Error, Loader, getDataQuery } from 'components';
import { Item, List, Name, Character } from './Cast.styled';

const PATHNAME_PHOTO = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    getDataQuery({ typeRequest: 'movieCredits', movie_id: movieId })
      .then(response => {
        return setActors(response.cast);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 700);
  }, [actors]);

  return (
    <>
      {actors.length !== 0 ? (
        <List>
          {actors.map(actor => {
            return (
              <Item key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `${PATHNAME_PHOTO}${actor.profile_path}`
                      : DEFAULT_PHOTO
                  }
                  alt={actor.name}
                  width="70%"
                  height="200"
                />
                <Name>{actor.name}</Name>
                <Character>Character:{actor.character}</Character>
              </Item>
            );
          })}
        </List>
      ) : (
        !isError && <h4>Sorry, no information about cast </h4>
      )}

      {isLoading && <Loader />}
      {isError && <Error textError={`${isError} on Server. Sorry...`} />}
    </>
  );
};
