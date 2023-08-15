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
