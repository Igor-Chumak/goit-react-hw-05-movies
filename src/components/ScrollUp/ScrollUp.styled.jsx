import styled from 'styled-components';
import imgButton from 'images/up_arrow_round.png';

export const ScrollUp = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
  color: black;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  outline: none;
  background-image: url(${imgButton});
  &:focus,
  &:hover {
    background-color: #928d8dd3;
  }
`;
