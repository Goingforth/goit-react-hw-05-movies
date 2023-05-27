import styled from '@emotion/styled';

export const BlokMovieDetails = styled.div`
  display: flex;
  margin-top: 12px;

  border-bottom: 2px solid var(--botton-border);
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
`;
export const AdditionalInfoItems = styled.ul`
  padding-top: 12px;
  padding-left: 24px;
`;
