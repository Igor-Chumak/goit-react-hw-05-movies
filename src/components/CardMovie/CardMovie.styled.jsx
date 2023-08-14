import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px 12px 12px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
  margin-bottom: 6px;
  padding: 4px 4px;
  max-width: 100px;
  border: 1px solid #d6d5d5;
  border-radius: 10px;
  background-color: inherit;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover {
    color: red;
    background-color: #e9e8e8;
    /* transform: translateX(1%); */
    transform: scale(1.02);
  }
`;
