import styled from 'styled-components';

export const List = styled.ul`
  font-weight: 400;
  & li:nth-of-type(2n) {
    background-color: #e9e8e8;
  }
`;

export const Item = styled.li`
  background-color: #c4c4c4ce;
  width: 460px;
  padding: 5px 0;
`;
