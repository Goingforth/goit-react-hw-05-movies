import styled from '@emotion/styled';
export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 16px;
  margin-left: 16px;
  padding-left: 24px;
`;

export const MovieLink = styled.li`
  list-style-type: none;
  &::before {
    content: '🎦';
    padding-right: 12px;
  }
`;
