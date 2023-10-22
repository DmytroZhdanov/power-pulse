import styled from '@emotion/styled';

export const DateTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DayPickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ positionCalendar }) => ({
    [positionCalendar]: 'calc(100% + 10px)',
  })}

  .rdp {
    width: 215px;
    border-radius: 8px;
    padding: 14px;
    margin: 0;
    background-color: #ef8964;
  }

  .calendar-header {
    position: relative;
    margin-bottom: 14px;
    text-align: center;
  }

  .current-month-title {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.28px;
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
      transition: all 250ms ease-in-out;
      content: '';
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
    }

    &:not(.calendar-nav-button):hover {
      ::after {
        background-color: #040404;
      }
    }
  }

  .day-of-month[disabled] svg,
  .days-of-month-disabled,
  .days-of-month-outside {
    color: rgba(239, 237, 232, 0.2);
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
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #040404;
      position: absolute;
    }
  }
`;
