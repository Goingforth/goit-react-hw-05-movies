import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BlokMovieDetails = styled.div`
  display: flex;
  margin-top: 12px;

  border-bottom: 2px solid var(--botton-border);
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
`;
export const Poster = styled.img`
  max-width: 260px;
  max-height: 260px;
  padding-right: 24px;
  padding-bottom: 12px;
  object-fit: cover;
`;

export const Details = styled.ul`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 12px;
  list-style-type: none;
`;

export const AdditionalInfo = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  border-bottom: 2px solid var(--botton-border);
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
`;
export const AdditionalInfoItems = styled.ul`
  padding-top: 12px;
  padding-left: 24px;
`;

export const ButtonGoBack = styled.div`
  margin: 14px;
`;

export const LinkGoBack = styled(NavLink)`
  /* color: var(--black-color); */

  padding: 4px 10px;

  border-radius: 4px;
  text-decoration: none;
  font-size: 10px;

  background-color: var(--lightgrey-color);

  &:hover,
  &:focus {
    color: var(--blue-color);
    background-color: var(--buttonGoBack-color);
    cursor: pointer;
  }
`;
