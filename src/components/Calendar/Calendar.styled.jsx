import styled from '@emotion/styled';

export const DatePickerWrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  z-index: 100;

  ${({ inputClientRect: { top:top, left, height, bottom, width } }) => {
  
    if (window.innerHeight - bottom < 235) {
      return `
    top:'auto';
    left:${left + width / 2}px;
    bottom:${window.innerHeight - top + height / 4 - window.scrollY}px;`;
    } else {
      return `
    top:${bottom + height / 4 + window.scrollY}px;
    left:${left + width / 2}px;
    bottom:'auto';`;
    }
  }}

  .date-picker-calendar {
    width: 215px;
    border-radius: 8px;
    padding: 14px;
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
      }
    }

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
      position: absolute;
      top: 6px;
      z-index: 1;
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
      row-gap: ${({ inputClientRect }) => {
        if (
          inputClientRect.top > 250 ||
          window.innerHeight - inputClientRect.bottom > 250
        )
          return 10;
        else return 2;
      }}px;

      @media screen and (min-height: 690px) {
        row-gap: 10px;
      }
    }

    .react-calendar__tile {
      overflow: visible !important;
      position: relative;
      z-index: 1;
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

export const TransitionDatePicker = styled.div`
  &.date-picker-wrapper-enter {
    opacity: 0;
    transform: scale(0.8)
      translateY(
        ${({ inputClientRect }) => {
          if (window.innerHeight - inputClientRect.bottom < 235) {
            return '50px';
          } else {
            return '-50px';
          }
        }}
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
        ${({ inputClientRect }) => {
          if (window.innerHeight - inputClientRect.bottom < 235) {
            return '50px';
          } else {
            return '-50px';
          }
        }}
      );
    transition:
      opacity 300ms ease-in-out,
      transform 300ms ease-in-out;
  }
`;
