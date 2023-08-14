import { Wrapper, Title, LinkStyled } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
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
