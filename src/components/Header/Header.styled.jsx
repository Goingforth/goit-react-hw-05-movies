import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavMenu = styled.ul`
  display: flex;
  gap: 24px;
  list-style-type: none;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
