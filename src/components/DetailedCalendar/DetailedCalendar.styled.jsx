import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 25px;
  display: flex;
  gap: 25px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Item = styled.li`
  cursor: pointer;
  color: ${({ active }) =>
    active
      ? ({ theme }) => theme.color.orangeFirst
      : ({ theme }) => theme.color.white};

  transition: color 200ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.orangeFirst};
  }
`;

export const CalendarWrapper = styled.div`
  .detailed-calendar {
    height: 100%;
    width: 800px;
    background: rgba(239, 237, 232, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);

    .react-calendar__month-view__weekdays {
      height: 40px;
    }

    .react-calendar__month-view__weekdays__weekday {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      abbr[title] {
        padding-right: 10px;
        user-select: none;
        text-decoration: none;
        color: ${({ theme }) => theme.color.label};
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -0.28px;

        ::first-letter {
          text-transform: uppercase;
        }
      }
    }

    .react-calendar__viewContainer,
    .react-calendar__month-view,
    .react-calendar__month-view > div,
    .react-calendar__month-view > div > div {
      height: 100%;
    }
    .react-calendar__month-view__days {
      height: calc(100% - 40px);
      row-gap: 5px;
      column-gap: 5px;
      padding: 5px;
    }

    .react-calendar__tile,
    .react-calendar__month-view__days__day {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.28px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 5px;
      height: calc((100% - 35px) / 6);
      background-color: transparent;

      max-width: calc((100% - 30px) / 7);
      color: ${({ theme }) => theme.color.white};
      background: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      border: 1px solid rgba(239, 237, 232, 0.2);

      transition:
        background 200ms ease-in-out,
        color 200ms ease-in-out;
    }

    .react-calendar__tile.react-calendar__tile--now {
      color: ${({ theme }) => theme.color.black};
      background: ${({ theme }) => theme.color.orangeFirst};
    }

    .react-calendar__tile--active {
    }

    .react-calendar__tile--range,
    .react-calendar__tile--hover {
      background: ${({ theme }) => theme.color.orangeThird};
      color:${({ theme }) => theme.color.black};
    }
    .react-calendar__tile--rangeStart {
      background: ${({ theme }) => theme.color.orangeSecond};
    }
    .react-calendar__tile--rangeEnd {
      background: ${({ theme }) => theme.color.orangeSecond};
    }
  }
`;
