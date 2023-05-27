import styled from '@emotion/styled';

export const TrendingHeader = styled.h1`
  margin: 0;
  padding-top: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 24px;
`;

export const TrendMovie = styled.li`
  list-style-type: none;
  &::before {
    content: '🎦';
    padding-right: 12px;
  }
`;
