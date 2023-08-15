import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled.li`
  margin: 0;
  padding: 10px;
  flex-basis: calc((100% - 36px) / 4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #e9e8e8;
  box-shadow: 5px 5px 5px rgba(100, 100, 100, 0.3);

  & > img {
    margin-bottom: 12px;
    border-radius: 5px;
  }
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

export const Character = styled(Name)`
  font-weight: 400;
  font-size: 14px;
`;
