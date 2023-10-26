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
  },

  // Точки адаптивної верстки
  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },
};