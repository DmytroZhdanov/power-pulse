import styled from '@emotion/styled';

export const DataBtnsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 64px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const ArrowBtnRight = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 2px 0;
  border: none;
  color: ${({ theme }) => theme.color.graySecond};

  /* color: rgba(239, 237, 232, 0.6); */
  background-color: transparent;
  font-size: 16px;
  transition: all 250ms ease-in-out;
  padding: 5px 10px;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 10px 0px rgba(230, 83, 60, 0.8);
    color: #efede8;
    transform: translateX(3px);
    background-color: ${({ theme }) => theme.color.black};
    /* background-color: black; */
  }
`;

export const ArrowBtnLeft = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 2px 0;
  border: none;
  color: ${({ theme }) => theme.color.graySecond};

  background-color: transparent;
  font-size: 16px;
  transition: all 250ms ease-in-out;
  padding: 5px 10px;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 10px 0px rgba(230, 83, 60, 0.8);
    color: ${({ theme }) => theme.color.white};

    transform: translateX(-3px);
    background-color: ${({ theme }) => theme.color.black};
  }
`;
export const GoBtn = styled.button`
  padding: 16px 75px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.color.graySecond};
  background-color: ${({ theme }) => theme.color.orangeFirst};

  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.color.white};

  transition: color 300ms ease-in-out;
`;
