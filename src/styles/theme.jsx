/* Приклад користування:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.input};
  

  &:hover, &:focus {
    color: ${({theme}) => theme.color.orangeFirst};
    background-color: ${({theme}) => theme.color.inputActive};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    color: ${({theme}) => theme.color.black};
    background-color: ${({theme}) => theme.color.orangeThird};
  }
`
*/

export const theme = {
  // Кольори
  color: {
    black: '#040404',
    white: '#EFEDE8',

<<<<<<< HEAD
=======
    grayDisabled: 'rgba(239, 237, 232, 0.2)',
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    grayFirst: 'rgba(239, 237, 232, 0.30)',
    graySecond: 'rgba(239, 237, 232, 0.65)',
    grayBackground: 'rgba(239, 237, 232, 1)',

    orangeFirst: '#E6533C',
    orangeSecond: '#EF8964',
    orangeThird: '#EFA082',

    border: 'rgba(239, 237, 232, 0.30)',

    // Ховери
    hover: '#EF8964',
    hoverBorder: '#E6533C',

    // Кольори таблиць
    tableLabel: '#EF8964',
    circleGreen: '#419B09',
    circleRed: '#E9101D',

    // Кольори форм
    label: 'rgba(239, 237, 232, 0.50)',
    input: 'rgba(239, 237, 232, 0.30)',
    inputActive: '#E6533C',
    inputSuccess: '#3CBF61',
    inputError: '#D80027',
<<<<<<< HEAD
=======

    // Step indicator color
    default: '#303030',
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  },

  // Точки адаптивної верстки
  breakpoint: {
<<<<<<< HEAD
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },
=======
    firstMobile: '320px',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },

  // box-shadow
  boxShadow: {
    calendarButton: '0 0 5px 0.5px #EFEDE8, inset 0 0 5px 0px #EFEDE8',
    dataIndicator: '0px 1px 10px 0px rgba(230, 83, 60, 0.80)',
  },
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
};
