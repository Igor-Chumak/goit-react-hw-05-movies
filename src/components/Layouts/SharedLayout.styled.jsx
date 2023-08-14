import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-top: 12px;
  margin-bottom: 16px;
  padding: 8px 0;
  /* border-bottom: 1px solid black; */
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  /* box-shadow: 0px 4px 10px 4px #9e9e9e; */

  & > nav {
    margin-left: 12px;
    display: flex;
    gap: 8px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
    background-color: #e9e8e8;
  }
`;
