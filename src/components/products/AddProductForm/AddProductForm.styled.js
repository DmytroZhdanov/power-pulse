import styled from '@emotion/styled';

export const DivAddForm = styled.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 320px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`;

export const DivInputs = styled.div`
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 415px;
  }
`;

export const InputName = styled.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({ theme }) => theme.color.grayFirst};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const DivGrams = styled.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: inline-block;
  }
`;

export const InputGrams = styled.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.orangeFirst};
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const SpanPlaceholder = styled.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${({ theme }) => theme.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    right: 16px;
    top: 12px;
  }
`;

export const DivCalories = styled.div`
  display: flex;
`;

export const PCalories = styled.p`
  color: ${({ theme }) => theme.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`;

export const SpanValueCalories = styled.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`;

export const DivBtn = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`;

export const DivWrapperDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 12px 22px;
  border: none;
  color: ${({ theme }) => theme.color.white};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.orangeFirst};
  line-height: calc(18 / 16);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const ButtonCancel = styled.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayFirst};
  background: transparent;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
