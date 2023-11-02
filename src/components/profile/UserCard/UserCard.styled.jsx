import styled from '@emotion/styled';

export const UserDiv = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 439px;
    gap: 32px;
  }
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 166px;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 61px;
    height: 62px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    fill: inherit;
    border-radius: 50%;
    font-size: 14px;
    color: ${({ theme }) => theme.color.grayFirst};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 150px;
    height: 150px;

    svg {
      width: 102px;
      height: 102px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BtnAvatarLabel = styled.label`
  position: absolute;
  left: 50%;
  bottom: -11px;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border-style: none;
  border-radius: 50%;
  background-color: transparent;

  input {
    display: none;
    visibility: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 32px;
    height: 32px;
    bottom: -14px;
  }
`;

export const MainTextP = styled.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;

export const SecondTextP = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.color.grayFirst};
`;

export const AddTextP = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: ${({ theme }) => theme.color.white}cc;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    line-height: calc(18 / 12);
  }
`;

export const NameDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.color.white}80;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 8px;
  }
`;

export const DailyDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media screen and (max-width: 374px) {
    max-width: 100%;

    div {
      width: calc((100vw - 60px) / 2);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 16px;
  }
`;

export const CaloriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 157px;
  padding: 14px 13px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 214px;
    padding: 14px 18px;

    p {
      line-height: calc(32 / 24);
    }
  }
`;

export const SportTimeDiv = styled(CaloriesDiv)`
  width: 165px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 209px;
  }
`;

export const WarningsDiv = styled.div`
  width: 100%;

  p {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    p {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;

export const BtnLogoutDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
