import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SearchLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
  margin-left: 5px;
`;
export const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  padding: 5px 15px;
  &::placeholder {
    opacity: 0.5;
  }
`;
