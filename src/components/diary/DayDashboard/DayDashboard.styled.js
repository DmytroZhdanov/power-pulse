import styled from '@emotion/styled';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;

export const BlockList = styled.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;

export const BlockItem = styled.li`
  display: block;
  width: 157px;
  padding: 14px;
  background-color: ${props =>
    props.highlighted ? '#E6533C' : 'rgba(239, 237, 232, 0.05)'};
  border-radius: 12px;
  border: 1px solid
    ${props =>
      props.highlighted
        ? 'rgba(239, 237, 232, 0.2)'
        : 'rgba(239, 237, 232, 0.2)'};
  ${props => props.caloriesOverConsumed && 'border-color: #E9101D'};
  ${props => props.caloriesOverBurned && 'border-color: #3CBF61'};

  @media screen and (max-width: 374px) {
    margin: 0 auto;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    padding: 18px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: ${16 / 12};
  color: ${props =>
    props.highlighted
      ? 'rgba(239, 237, 232, 0.8)'
      : 'rgba(239, 237, 232, 0.4)'};

  @media screen and (min-width: 768px) {
    line-height: ${18 / 12};
  }
`;

export const Value = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: ${20 / 18};
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: ${32 / 24};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto' sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: ${18 / 14};
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: ${24 / 16};
  }
`;
