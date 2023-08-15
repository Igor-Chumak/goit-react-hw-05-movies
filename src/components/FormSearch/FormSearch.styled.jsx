import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-bottom: 12px;
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: inherit;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  margin-bottom: 6px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  border: 1px solid #d6d5d5;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  &::placeholder {
    font-weight: inherit;
    font-size: 12px;
  }
`;
