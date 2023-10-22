import styled from '@emotion/styled';

const getColor = (stepValue, step) => {
  if (stepValue === step) return '#E6533C';
  if (stepValue >= step) return '#EFA082';
  return '#303030';
};
const getShadowColor = (stepValue, step) => {
  if (stepValue === step) return '0px -1px 10px 0px rgba(230, 83, 60, 0.8)';
  // if (stepValue >= step) return '#EFA082';
  // return '#303030';
};

export const ProgressBarContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const Step = styled.span`
  height: 4px;
  width: 80px;
  background-color: ${props => getColor(props.stepValue, props.step)};

  border-radius: 0.2rem;
  box-shadow: ${props => getShadowColor(props.stepValue, props.step)};
`;
