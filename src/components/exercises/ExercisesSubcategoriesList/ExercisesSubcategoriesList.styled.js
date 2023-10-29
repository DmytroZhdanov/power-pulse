import styled from '@emotion/styled';

export const ListWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
    column-gap: 16px;
    flex-direction: row;
  }
`;

export const ButtonsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;
  border: 1px solid
    ${props => (props.active ? '#e6533c' : 'rgba(239, 237, 232, 0.10)')};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin: 8px;
  background-color: black;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${props =>
      props.active ? '#e6533c' : 'rgba(239, 237, 232, 0.10)'};
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  color: ${props => (props.active ? '#e6533c' : 'rgba(239, 237, 232, 0.10)')};
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;
`;
