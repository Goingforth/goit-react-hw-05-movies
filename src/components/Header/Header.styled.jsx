import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavMenu = styled.ul`
  display: flex;
  gap: 24px;

  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  border-bottom: 2px solid var(--botton-border);
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
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
