import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 215px);
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 264px);
  }
  @media screen and (min-width: 1440px) {
    min-height: 0;
  }
`;

export const GalleryUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
    column-gap: 16px;
    flex-direction: row;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 15px;
  }
`;

export const ButtonsWrapperUl = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
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
