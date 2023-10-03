import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  padding: 25px 0 25px 25px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 0 30px;
  list-style: none;
`;

export const HeaderNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: red;
  }
`;
