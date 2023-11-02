import styled from '@emotion/styled';

export const Form = styled.form`
  button {
    width: 115px;
    padding: 12px 40px;
    font-size: 16px;
    line-height: calc(18 / 16);
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.orangeFirst};
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 696px;

    button {
      width: 144px;
      padding: 16px 50px;
      font-size: 20px;
      line-height: calc(24 / 20);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 760px;
    padding-right: 64px;
    border-right: 1px solid ${({ theme }) => theme.color.grayDisabled};
  }
`;

export const FirstInfo = styled.div`
  #email {
    color: ${({ theme }) => theme.color.grayFifth};
  }

  margin-bottom: 14px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: rgba(239, 237, 232, 0.502);

    input {
      margin: 4px 0 14px 0;
    }
  }

  input {
    padding: 14px;

    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.grayFirst};
    border-radius: 12px;
    background-color: transparent;
    width: 335px;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;

    label {
      width: 100%;
    }

    input {
      max-width: 100%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: inline-flex;
    align-items: flex-end;
    gap: 14px;

    label {
      width: 341px;
      display: block;
      font-size: 14px;
      line-height: calc(18 / 14);

      input {
        margin-top: 8px;
        margin-bottom: 0;
      }
    }

    input {
      font-size: 16px;
      line-height: calc(24 / 16);
      width: 341px;
      height: 52px;
    }
  }
`;

export const AddInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;

  label {
    font-size: 12px;
    line-height: calc(18 / 12);
    color: rgba(239, 237, 232, 0.502);
  }

  input {
    padding: 14px;
    margin-top: 4px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.grayFirst};
    border-radius: 12px;
    background-color: transparent;
  }

  @media screen and (max-width: 374px) {
    max-width: 100%;

    label,
    input,
    #currentWeight {
      width: calc((100vw - 60px) / 2);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    width: 335px;

    input {
      width: 160px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 696px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    label {
      font-size: 14px;
      line-height: calc(18 / 14);
    }

    input {
      margin-top: 8px;
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;

export const Data = styled.div`
  width: calc((335px - 14px) / 2);
  display: inline-flex;
  gap: 14px;

  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: calc((696px - 14px) / 2);
  }
`;

export const Height = styled.label`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    input {
      width: 168px;
    }
  }
`;

export const CurWeight = styled(Height)`
  input {
    width: 161px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    input {
      width: 159px;
    }
  }
`;

export const Text = styled.div`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: rgba(239, 237, 232, 0.502);
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const CalendarI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-end;

  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;

    label,
    input,
    & > div {
      width: calc((100vw - 60px) / 2);
    }
  }
`;

export const DesWeight = styled.label`
  @media screen and (max-width: 374px) {
    max-width: 160px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 160px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 140px;

    input {
      width: 140px;
      width: 100%;
      margin-top: 8px;
    }
  }
`;

export const Birthday = styled(DesWeight)`
  width: 161px;
  margin-top: 22px;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 187px;
  }
`;

export const SecondInfo = styled.div`
  width: 100%;

  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    line-height: calc(18 / 14);
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Blood = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;

export const Gender = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;

  @media screen and (max-width: 374px) {
    margin-top: 20px;
  }
`;

export const RadioBox = styled.input`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: 2px solid #636366;
    background-color: ${({ theme }) => theme.color.black};
  }

  &:checked&::before {
    /* outline: thick double #0e0e0d; */
    background-color: ${({ theme }) => theme.color.orangeSecond};
  }
`;

export const HealthInfo = styled.div`
  @media screen and (max-width: 374px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  width: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 32px;
  }
`;

export const Lifestyle = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin: 32px 0 38px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 48px;
  }
`;

export const Button = styled.button`
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.grayFifth : theme.color.white};
`;
