import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 12px;
  padding: 8px 12px 12px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  & > img {
    border-radius: 10px;
  }
`;
