import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin-left: 30px;
`;

export const LangSwitchBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  backdrop-filter: blur(1px);
  padding: 7px 12px;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  ${({ isOpen }) => `
      border-bottom-left-radius: ${isOpen ? 'none' : '10px'};
      border-bottom-right-radius:${isOpen ? 'none' : '10px'};
  `}
  background-color: transparent;
  color: ${({ theme }) => theme.color.grayFifth};

  transition:
    border-radius 300ms ease-in-out,
    color 150ms ease-in-out,
    border 150ms ease-in-out;

  :hover {
    border: 1px solid #e6533c;
    color: ${({ theme }) => theme.color.white};
  }

  :hover svg {
    stroke: ${({ theme }) => theme.color.white};
  }

  svg {
    transition: stroke 150ms ease-in-out;

    stroke: ${({ theme }) => theme.color.grayFifth};

    width: 20px;
    height: 20px;
  }
`;

export const DropdownList = styled.ul`
  backdrop-filter: blur(1px);
  cursor: pointer;
  position: absolute;
  z-index: -1;
  width: 100%;
  padding: 9px 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &.dropdown-menu-enter {
    opacity: 0;
    translate: 0 -50%;
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
    translate: 0 -50%;
    transition:
      opacity 150ms ease-in-out,
      translate 300ms ease-in-out;
  }
`;

export const DropdownItem = styled.li`
  color: ${({ theme }) => theme.color.grayFifth};

  transition: color 150ms ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.white};
  }
`;
