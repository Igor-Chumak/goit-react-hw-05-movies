// import { Link } from 'react-router-dom';
import { Container, List, Link } from './AdditionalInfo.styled';

export const AdditionalInfo = props => {
  return (
    <Container>
      <h3>Additional information</h3>
      <List>
        <li key="cast">
          {' '}
          <Link to="cast">Cast</Link>
        </li>
        <li key="reviews">
          {' '}
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
    </Container>
  );
};

// export const AdditionalInfo = props => {
//   return (
//     <Container>
//       <h3>Additional information</h3>
//       <List>
//         <li key="cast">
//           {' '}
//           <Link to="cast">Cast</Link>
//         </li>
//         <li key="reviews">
//           {' '}
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </List>
//     </Container>
//   );
// };

// export const AdditionalInfo = props => {
//   return (
//     <Container>
//       <Title>Additional information</Title>
//       <List>
//         <li key="cast">
//           {' '}
//           <Link to={'cast'}>Cast</Link>
//         </li>
//         <li key="reviews">
//           {' '}
//           <Link to={'reviews'}>Reviews</Link>
//         </li>
//       </List>
//     </Container>
//   );
// };
