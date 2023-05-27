import styled from '@emotion/styled';
export const FormSearch = styled.form`
  display: flex;
  margin-left: 24px;
  margin-top: 18px;
  // cursor: pointer;
  //margin: 24px;
`;

export const FormInput = styled.input`
  width: 300px;
  margin-right: 6px;
  padding: 6px;
  padding-left: 20px;
  border: 1px solid;
  border-radius: 2px;
  &:focus,
  &:active {
    border-color: var(--input-border);
    outline: var(--input-border);
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
`;
