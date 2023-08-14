import { Wrapper, Title, LinkStyled } from './AdditionalInfo.styled';

export const AdditionalInfo = props => {
  return (
    <Wrapper>
      <Title>Additional information</Title>
      <LinkStyled to="cast">Cast &#62;&#62;</LinkStyled>
      <LinkStyled to="reviews">Reviews &#62;&#62;</LinkStyled>
    </Wrapper>
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
