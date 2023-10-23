import styled from '@emotion/styled';

export const ExerciseContainer = styled.div`
  display: grid;
  border-radius: 12px;
  padding: 48px 16px;
  width: 335px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: #10100f;
  gap: 40px;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
    width: 694px;
    grid-template-columns: 270px 1fr;
    gap: 16px;
  }
`;

export const ExerciseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const Gif = styled.img`
  object-fit: cover;
  margin-bottom: 14px;
  width: 270px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%),
    url(<path-to-image>),
    lightgray 0px -17.5px / 100% 119.469% no-repeat;
`;

export const TimeLabel = styled.p`
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 10px;
  line-height: 1.4;
`;

export const TimerDisplay = styled.div`
  margin-bottom: 14px;

  svg {
    transform: rotate(180deg);
  }
`;

export const TimeValue = styled.p`
  color: #efede8;
  font-size: 16px;
  line-height: 1.5;
`;

export const ControlButton = styled.button`
  background-color: #e6533c;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  margin-bottom: 8px;
  transition: transform 300ms ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const BurnedCalories = styled.div`
  display: flex;
  gap: 8px;
`;

export const BurnedCaloriesLabel = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
`;

export const BurnedCaloriesValue = styled.p`
  color: #e6533c;
  font-size: 14px;
  line-height: 1.29;
`;

export const List = styled.ul`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
`;

export const Label = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const Value = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;
  ::first-letter {
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonSubmit = styled.button`
  border: none;
  display: inline-flex;
  padding: 12px 32px;
  border-radius: 12px;
  background: #e6533c;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    line-height: 1.5;
  }
`;
