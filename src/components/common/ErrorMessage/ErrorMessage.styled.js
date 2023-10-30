import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 280px;
  align-items: center;
  padding: 35px 35px;

  @media screen and (min-width: 768px) {
    width: 500px;
    gap: 30px;
    padding: 70px 70px;
  }
`;

export const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #efa082;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Message = styled.p`
  color: #efede8;
  line-height: 1.5;
`;
