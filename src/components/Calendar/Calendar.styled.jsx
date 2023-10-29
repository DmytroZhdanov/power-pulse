import styled from '@emotion/styled';

<<<<<<< HEAD
export const DateTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DayPickerWrapper = styled.div`
  position: absolute;
  left: 0;
  ${({ positionCalendar }) => ({
    [positionCalendar]: 'calc(100% + 10px)',
  })}

  .rdp {
=======
export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;

  .date-picker-calendar {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    width: 215px;
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    ${({ positionCalendar }) =>
      positionCalendar === 'top' ? 'top: 10px' : 'bottom: 70px'};

    border-radius: 8px;
    padding: 14px;
<<<<<<< HEAD
    margin: 0;
    background-color: #ef8964;
  }

  .calendar-header {
    position: relative;
    margin-bottom: 14px;
    text-align: center;
  }

  .current-month-title {
    user-select: none;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
    color: #efede8;
  }

  .month-title-dropdown {
    margin-right: 10px;
  }

  .year-title-dropdown {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .calendar-nav-button-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .calendar-nav-icon {
    color: #efede8;
    height: 10px;
    width: 10px;
  }

  .days-wrapper {
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    display: flex;
    flex-direction: column;
    gap: 11px;
    padding-top: 14px;
  }

  .name-days-of-week-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .name-days-of-week {
    user-select: none;
    width: 16px;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
  }

  .days-of-month-wrapper {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .days-of-month-row {
    display: flex;
    justify-content: space-between;
  }

  .day-of-month {
    user-select: none;
    width: 16px;
    position: relative;
    z-index: 1;
    border: none;
    background-color: transparent;
    padding: 0;
    color: #efede8;
    font-size: 14px;
    line-height: 1.29%;
    letter-spacing: -0.28px;
    cursor: pointer;

    ::after {
      transition:
        background-color 300ms ease-in-out,
        box-shadow 150ms ease-in-out;
      content: '';
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
    }

    &:not(button[disabled]):not(.days-of-month-outside):hover {
      ::after {
        background-color: #040404;
        box-shadow:
          0 0 10px 1px #efede8,
          inset 0 0 2px 1px #efede8;
=======
    border: none;
    background: ${({ theme }) => theme.color.orangeSecond};

    .react-calendar__navigation {
      text-align: center;
      height: auto;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid ${({ theme }) => theme.color.grayDisabled};
      margin-bottom: 14px;

      button {
        min-width: auto;
        width: auto;
      }
      button:disabled,
      button:disabled svg {
        stroke: #efede866;
        background-color: transparent;
        cursor: not-allowed;
        user-select: none;
        color: #efede866;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      }
    }

<<<<<<< HEAD
  .day-of-month[disabled] svg,
  .days-of-month-disabled,
  .days-of-month-outside {
    color: rgba(239, 237, 232, 0.2);
    cursor: not-allowed;
  }

  .days-of-month-outside {
    pointer-events: none;
  }

  .day-selected {
    position: relative;
    z-index: 0;

    ::after {
      content: '';
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-shadow:
        0 0 10px 1px #efede8,
        inset 0 0 2px 1px #efede8;
      background-color: #040404;
=======
    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label {
      color: ${({ theme }) => theme.color.white};
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
      padding: 0;
      background-color: transparent;
      :hover,
      :focus {
        background-color: transparent;
      }
    }

    .react-calendar__navigation__label {
      transition: color 300ms ease-in-out;

      :not(button[disabled]):hover {
        color: #040404a1;
      }
    }

    .react-calendar__navigation__arrow {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
      position: absolute;
      top: 6px;
      padding: 8px 8px;

      svg {
        width: 10px;
        height: 10px;
        stroke: ${({ theme }) => theme.color.white};
      }

      &.react-calendar__navigation__prev2-button {
        left: 1px;
      }
      &.react-calendar__navigation__prev-button {
        left: 24px;
      }
      &.react-calendar__navigation__next-button {
        right: 24px;
      }
      &.react-calendar__navigation__next2-button {
        right: 1px;
      }

      ::after {
        transition:
          background-color 300ms ease-in-out,
          box-shadow 150ms ease-in-out;
        content: '';
        z-index: -1;
        top: calc(50%);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
      }
      :not(button[disabled]):hover::after {
        background-color: ${({ theme }) => theme.color.black};
        box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
      }
    }

    .react-calendar__tile.react-calendar__year-view__months__month,
    .react-calendar__tile.react-calendar__decade-view__years__year {
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 10px;
      row-gap: 10px;
      margin-bottom: 14px;
      transition:
        background-color 300ms ease-in-out,
        box-shadow 150ms ease-in-out;

      :not(button[disabled]):hover {
        background-color: ${({ theme }) => theme.color.black};
        box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
      }
    }

    .react-calendar__tile.react-calendar__tile--hasActive {
      background-color: ${({ theme }) => theme.color.black};
      box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
    }

    .react-calendar__month-view__weekdays {
      text-transform: capitalize;
      margin-bottom: 14px;
    }

    .react-calendar__month-view__weekdays__weekday {
      padding: 0;
      text-align: center;

      abbr[title] {
        user-select: none;
        text-decoration: none;
        color: ${({ theme }) => theme.color.label};
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.28px;
      }
    }

    .react-calendar__month-view__days {
      row-gap: 10px;
    }

    .react-calendar__tile {
      overflow: visible !important;
      position: relative;
      padding: 0;
      background-color: transparent;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.29;
      letter-spacing: -0.28px;
      color: ${({ theme }) => theme.color.white};
      user-select: none;

      &.react-calendar__tile--active {
        ::after {
          transition:
            background-color 300ms ease-in-out,
            box-shadow 150ms ease-in-out;
          content: '';
          z-index: -1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.color.black};
          box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
          position: absolute;
        }
      }

      :hover {
        background-color: transparent;
      }
    }

    .active-month {
      ::after {
        transition:
          background-color 300ms ease-in-out,
          box-shadow 150ms ease-in-out;
        content: '';
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
      }

      &:not(button[disabled]):hover::after {
        background-color: ${({ theme }) => theme.color.black};
        box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
      }
    }

    .react-calendar__tile--now.react-calendar__month-view__days__day {
      ::after {
        transition:
          background-color 300ms ease-in-out,
          box-shadow 150ms ease-in-out;
        content: '';
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        border-radius: 50%;
        box-shadow: ${({ theme }) => theme.boxShadow.calendarButton};
        position: absolute;
      }
    }

    .react-calendar__tile:disabled {
      color: ${({ theme }) => theme.color.grayDisabled};
      cursor: not-allowed;
      user-select: none;
    }
  }
`;

<<<<<<< HEAD
export const TransitionDayPicker = styled(DayPickerWrapper)`
  &.day-picker-wrapper-enter {
=======
export const TransitionDatePicker = styled.div`
  &.date-picker-wrapper-enter {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({ positionCalendar }) =>
          positionCalendar === 'top' ? '-50px' : ' 50px'}
      );
  }

<<<<<<< HEAD
  &.day-picker-wrapper-enter-active {
=======
  &.date-picker-wrapper-enter-active {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    opacity: 1;
    transform: scale(1) translateY(0px);
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  /* Для зникнення */
<<<<<<< HEAD
  &.day-picker-wrapper-exit {
=======
  &.date-picker-wrapper-exit {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    opacity: 1;
    transform: scale(1) translateY(0px);
  }

<<<<<<< HEAD
  &.day-picker-wrapper-exit-active {
=======
  &.date-picker-wrapper-exit-active {
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({ positionCalendar }) =>
          positionCalendar === 'top' ? '-50px' : ' 50px'}
      );
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
`;
