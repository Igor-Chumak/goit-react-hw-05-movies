import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: 2px solid rgba(100, 100, 100, 0.5);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  margin-left: 40px;
  font-size: 20px;
  font-weight: 500;
`;
// export const List = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 15px;
// `;
export const LinkStyled = styled(Link)`
  margin-bottom: 6px;
  margin-left: 12px;
  padding: 4px;
  display: block;
  max-width: 100px;
  border: 1px solid #d6d5d5;
  border-radius: 10px;
  background-color: inherit;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    color: red;
    background-color: #e9e8e8;
    /* transform: translateX(1%); */
    transform: scale(1.02);
  }
`;
