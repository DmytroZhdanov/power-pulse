import styled from '@emotion/styled';

export const DataBtnsContainerDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ArrowBtnRight = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: all ${({ theme }) => theme.transition.main};
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.dataIndicator};
    transform: translateX(3px);
    background-color: ${({ theme }) => theme.color.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ArrowBtnLeft = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border: none;
  color: ${({ theme }) => theme.color.grayFifth};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  transition: all ${({ theme }) => theme.transition.main};
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.dataIndicator};
    transform: translateX(3px);
    background-color: ${({ theme }) => theme.color.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ArrowIconDiv = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.orangeFirst};

  svg {
    width: 75%;
    height: 75%;
    stroke: currentColor;
  }
`;

export const GoBtn = styled.button`
  padding: 12px 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.orangeFirst};
  border-radius: 12px;
  border: none;
  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 16px 75px;
    font-size: 20px;
    line-height: calc(24 / 20);
  }
`;
