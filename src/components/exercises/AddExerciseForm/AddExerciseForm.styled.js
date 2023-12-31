import styled from '@emotion/styled';

export const ExerciseContainerDiv = styled.div`
  display: grid;
  padding: 48px 16px;
  width: 280px;
  height: 280px;
  gap: 40px;

  @media screen and (min-height: 450px) {
    height: 400px;
  }

  @media screen and (min-height: 550px) {
    height: 500px;
  }

  @media screen and (min-height: 650px) {
    height: 570px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    height: auto;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`;

export const ExerciseInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkoutSummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0px;
  }
`;

export const GifImg = styled.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 230px;
  height: 230px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 270px;
    height: 270px;
  }
`;

export const CaloriesDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const CaloriesLabelP = styled.p`
  color: ${({ theme }) => theme.color.grayFirst};
  font-size: 14px;
  line-height: 1.29;
`;

export const CaloriesValueP = styled.p`
  color: ${({ theme }) => theme.color.orangeFirst};
  font-size: 14px;
  line-height: 1.29;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;

  & > :first-of-type {
    align-self: flex-start;
  }
  & > :last-of-type {
    align-self: flex-end;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ButtonOpenPastDaysForm = styled.button`
  border: none;
  max-width: 140px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.orangeFirst};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 150px;
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 300ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const ButtonSubmit = styled.button`
  border: none;
  display: inline-flex;
  padding: 12px 28px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.hoverBorder};
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: 1.5;
  }

  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.hoverBorder};
    background: ${({ theme }) => theme.color.white};
  }
`;
