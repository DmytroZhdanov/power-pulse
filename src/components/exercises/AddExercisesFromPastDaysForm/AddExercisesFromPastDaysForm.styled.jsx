import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 50px 45px 30px 45px;
  display: flex;
  gap: 25px;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const InputLabel = styled.span`
  color: rgba(239, 237, 232, 0.5);
  font-size: 16px;
  line-height: 1.29;
`;

export const InputTime = styled.input`
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 167px;
    padding: 12px;
  }
`;

export const WrapperCalendarInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.border};

  @media screen and (min-width: 768px) {
    width: 167px;
    padding: 12px;
  }
`;

export const CalendarInputText = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: 16px;
  line-height: 1.5;
`;

export const CalendarIcon = styled.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ButtonAdd = styled.button`
  width: 151px;
  padding: 12px 32px;
  border: none;
  color: ${({ theme }) => theme.color.white} ;

  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background:  ${({ theme }) => theme.color.orangeFirst} ;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;



