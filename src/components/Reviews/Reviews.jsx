import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Error, Loader, getDataQuery } from 'components';
import { Content, Item, List, Title } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getDataQuery({
      typeRequest: 'movieReviews',
      movie_id: movieId,
      page: 1,
    })
      .then(response => {
        return setReviews(response.results);
      })
      .catch(error => setIsError(error.message))
      .finally(setIsLoading(false));
  }, [movieId]);

  // useEffect(() => {
  //   window.scrollTo(0, 700);
  // }, [reviews]);

  return (
    <>
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(review => {
            return (
              <Item key={review.id}>
                <Title>Author : {review.author}</Title>
                <Content>{review.content}</Content>
              </Item>
            );
          })}
        </List>
      ) : (
        !isError && <h4>We don't have any reviews for this movie</h4>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </>
  );
};
