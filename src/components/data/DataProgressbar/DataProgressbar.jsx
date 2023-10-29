import { ProgressBarContainer, Step } from './DataProgressbar.styled';

const DataProgressbar = ({ stepValue }) => {
  return (
    <ProgressBarContainer>
      {[1, 2, 3].map(step => (
        <Step key={step} step={step} stepValue={stepValue} />
      ))}
    </ProgressBarContainer>
  );
};

export default DataProgressbar;
