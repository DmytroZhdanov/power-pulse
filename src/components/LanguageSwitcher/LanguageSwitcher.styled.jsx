import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin-left: 30px;
`;

export const LangSwitchBtn = styled.button`
  padding: 8px 20px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.grayFifth};

  transition:
    color 150ms ease-in-out,
    border 150ms ease-in-out;
  :hover {
    border: 1px solid #e6533c;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const DropdownWrap = styled.div`
  position: absolute;

  &.dropdown-menu-enter {
    opacity: 0;
    translate: 0 -100%;
  }

  &.dropdown-menu-enter-active {
    opacity: 1;
    translate: 0 0;
    transition:
      opacity 150ms ease-in-out 150ms,
      translate 300ms ease-in-out;
  }

  &.dropdown-menu-exit {
    opacity: 1;
    translate: 0 0;
  }

  &.dropdown-menu-exit-active {
    opacity: 0;
    translate: 0 -100%;
    transition:
      opacity 150ms ease-in-out,
      translate 300ms ease-in-out;
  }
`;
