/* Usage example:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.input};
  

  &:hover, &:focus {
    color: ${({theme}) => theme.color.orangeFirst};
    background-color: ${({theme}) => theme.color.inputActive};
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
    color: ${({theme}) => theme.color.black};
    background-color: ${({theme}) => theme.color.orangeThird};
  }
`
*/

export const theme = {
  // Colors
  color: {
    black: '#040404',
    white: '#EFEDE8',
    fullWhite: '#FFFFFF',

    grayDisabled: 'rgba(239, 237, 232, 0.2)',
    grayFirst: 'rgba(239, 237, 232, 0.30)',
    graySecond: 'rgba(239, 237, 232, 0.65)',
    grayThird: 'rgba(239, 237, 232, 0.4)',
    grayFourth: 'rgba(239, 237, 232, 0.05)',
    grayFifth: 'rgba(239, 237, 232, 0.60)',
    grayBackground: 'rgba(239, 237, 232, 1)',

    orangeFirst: '#E6533C',
    orangeSecond: '#EF8964',
    orangeThird: '#EFA082',

    border: 'rgba(239, 237, 232, 0.30)',

    // hover
    hover: '#EF8964',
    hoverBorder: '#E6533C',

    // Modal window colors
    backdropBackground: 'rgba(0, 0, 0, 0.6)',
    modalBackground: '#10100f',
    borderModal: 'rgba(239, 237, 232, 0.2)',

    // Table colors
    tableLabel: '#EF8964',
    circleGreen: '#419B09',
    circleRed: '#E9101D',

    // Form colors
    label: 'rgba(239, 237, 232, 0.50)',
    input: 'rgba(239, 237, 232, 0.30)',
    inputActive: '#E6533C',
    inputSuccess: '#3CBF61',
    inputError: '#D80027',

    // Step indicator color
    default: '#303030',
  },

  // Breakpoints
  breakpoint: {
    firstMobile: '320px',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },

  gradient: {
    exersises: `
    rgba(0, 0, 0, 1) 1%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.5) 100%,
        rgba(0, 0, 0, 0.3) 100%
    `,
  },

  // Animation (transition) on hover & focus
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
    modal: '300ms ease-in-out',
  },

  // box-shadow
  boxShadow: {
    calendarButton: '0 0 5px 0.5px #EFEDE8, inset 0 0 5px 0px #EFEDE8',
    feedbackButton: '0 0 16px 0 #EFEDE8',
    dataIndicator: '0px 1px 10px 0px rgba(230, 83, 60, 0.80)',
  },
};
