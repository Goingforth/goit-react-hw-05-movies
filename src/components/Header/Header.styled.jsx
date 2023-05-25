import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavMenu = styled.ul`
  display: flex;
  gap: 24px;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 18px;

  border-bottom: 2px solid var(--botton-border);
`;

export const NavItem = styled.li`
  list-style-type: none;
`;

export const StyledLink = styled(NavLink)`
  color: var(--black-color);
  text-decoration: none;

  &.active {
    color: var(--active-color);
  }
`;
