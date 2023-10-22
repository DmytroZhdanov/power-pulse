import styled from '@emotion/styled';

const getColor = (stepValue, step) => {
  if (stepValue === step) return '#E6533C';
  if (stepValue >= step) return '#EFA082';
  return '#303030';
};
export const DataContainer = styled.div`
  background-image: url('../../background/Desktop/bg_users.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
`;
