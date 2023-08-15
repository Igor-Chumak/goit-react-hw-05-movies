import styled from 'styled-components';

export const Button = styled.button`
  margin-bottom: 6px;
  padding: 4px;
  width: 80px;
  border-radius: 10px;
  border: 1px solid #d6d5d5;
  background-color: inherit;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover {
    color: red;
    background-color: #e9e8e8;
    transform: scale(1.02);
  }
`;
