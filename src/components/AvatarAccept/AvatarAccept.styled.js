import styled from '@emotion/styled';

export const AcceptDiv = styled.div`
  position: absolute;
  overflow: hidden;
  height: auto;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  max-width: 80px;
  max-height: 110px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 150px;
    max-height: 200px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 200px;
    max-height: 250px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 250px;
    max-height: 300px;
  }
`;
export const AcceptTitleH2 = styled.h2`
  color: #efede8;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.3%;
  width: fit-content;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 26px;
    margin-top: 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 65px;
    font-size: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 115px;
    font-size: 36px;
  }
`;
export const AcceptBtnDiv = styled.div`
  margin: 0 auto;
  position: absolute;
  display: flex;
  gap: 10px;
  width: fit-content;
  bottom: 20px;
  right: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 15px;
    bottom: 30px;
    right: 76px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 25px;
    bottom: 60px;
    right: 110px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    bottom: 80px;
    right: 137px;
  }
`;
export const AcceptBtn = styled.button`
  color: white;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 112.5%;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #e6533c;

  transition:
    background-color ${({ theme }) => theme.transition.main},
    color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.fullWhite};
    color: ${({ theme }) => theme.color.orangeFirst};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    padding: 12px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 22px;
    width: 100px;
    padding: 12px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 28px;
    width: 150px;
    padding: 16px 32px;
  }
`;
