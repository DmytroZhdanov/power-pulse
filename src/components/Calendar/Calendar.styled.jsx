import styled from '@emotion/styled';

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;

  .date-picker-calendar {
    width: 215px;
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    ${({ positionCalendar }) =>
      positionCalendar === 'top' ? 'top: 10px' : 'bottom: 70px'};

    border-radius: 8px;
    padding: 14px;
    border: none;
    background: #ef8964;

    .react-calendar__navigation {
      text-align: center;
      height: auto;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(239, 237, 232, 0.2);
      margin-bottom: 14px;

      button {
        min-width: auto;
        width: auto;
      }

      button:disabled {
        background-color: transparent;
        cursor: not-allowed;
        user-select: none;
        color: #efede866;
      }
    }

    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label {
      color: #efede8;
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
      position: absolute;
      top: 5px;
      padding: 8px 8px;

      &.react-calendar__navigation__prev2-button {
        left: 5px;
      }
      &.react-calendar__navigation__prev-button {
        left: 30px;
      }
      &.react-calendar__navigation__next-button {
        right: 30px;
      }
      &.react-calendar__navigation__next2-button {
        right: 5px;
      }

      ::after {
        transition:
          background-color 300ms ease-in-out,
          box-shadow 150ms ease-in-out;
        content: '';
        z-index: -1;
        top: calc(50% + 1.5px);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
      }
      :not(button[disabled]):hover::after {
        background-color: #040404;
        box-shadow:
          0 0 5px 1px #efede8,
          inset 0 0 2px 1px #efede8;
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
        background-color: #040404;
        box-shadow:
          0 0 10px 1px #efede8,
          inset 0 0 2px 1px #efede8;
      }
    }

    .react-calendar__tile.react-calendar__tile--hasActive {
      background-color: #040404;
      box-shadow:
        0 0 10px 1px #efede8,
        inset 0 0 2px 1px #efede8;
    }

    .react-calendar__month-view__weekdays {
      text-transform: capitalize;
      margin-bottom: 14px;
    }

    .react-calendar__month-view__weekdays__weekday {
      padding: 0;

      abbr[title] {
        user-select: none;
        text-decoration: none;
        color: rgba(239, 237, 232, 0.5);
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
      color: #efede8;
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
          background-color: #040404;
          box-shadow:
            0 0 10px 1px #efede8,
            inset 0 0 2px 1px #efede8;
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
        background-color: #040404;
        box-shadow:
          0 0 10px 1px #efede8,
          inset 0 0 2px 1px #efede8;
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
        box-shadow:
          0 0 5px 1px #efede8,
          inset 0 0 5px 1px #efede8;
        position: absolute;
      }
    }

    .react-calendar__tile:disabled {
      color: rgba(239, 237, 232, 0.2);
      cursor: not-allowed;
      user-select: none;
    }
  }
`;

export const TransitionDatePicker = styled.div`
  &.date-picker-wrapper-enter {
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({ positionCalendar }) =>
          positionCalendar === 'top' ? '-50px' : ' 50px'}
      );
  }

  &.date-picker-wrapper-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0px);
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }

  /* Для зникнення */
  &.date-picker-wrapper-exit {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }

  &.date-picker-wrapper-exit-active {
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
