import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  width: 100%;
  padding: 0 20px;

  ${props =>
    props.showStatisticInfo && {
      display: 'flex',
    }}

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 375px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 767px) {
    ${props =>
      props.showStatisticInfo && {
        height: 812,
      }}
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        height: 1024,
      }}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 744px;
  }

  @media screen and (max-width: 1439px) {
    ${props =>
      props.showStatisticInfo && {
        position: 'relative',
      }}
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: relative;
    width: 1288px;
  }
`;

export const FeedbackIconDiv = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.orangeFirst};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow.feedbackButton};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.color.orangeFirst};
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.color.orangeFirst};

    svg {
      fill: ${({ theme }) => theme.color.black};
    }
  }

  @media screen and (min-height: 680px) and (max-width: 767px) {
    top: 600px;
  }

  @media screen and (min-width: 517px) {
    right: calc(50% - 238px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    bottom: 50px;
    right: 32px;
    width: 52px;
    height: 52px;

    svg {
      width: 36px;
      height: 36px;
    }

    @media screen and (min-height: 896px) and (max-width: 1439px) {
      top: 800px;
    }
  }

  @media screen and (min-width: 953px) {
    right: calc(50% - 444px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    right: 32px;
    width: 60px;
    height: 60px;

    svg {
      width: 40px;
      height: 40px;
    }

    @media screen and (min-height: 710px) {
      top: 600px;
    }
  }

  @media screen and (min-width: 1520px) {
    right: calc(50% - 727px);
  }
`;
