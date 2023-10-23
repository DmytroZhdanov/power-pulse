import Data from './Data/DataStep';
import { DataContainer } from './DataComponent.styled';
import DataForm from './DataForm/DataForm';
import DataProgressbar from './DataProgressbar/DataProgressbar';
import { useState } from 'react';
import TestForm from './TestForm';

const DataComponent = () => {
  const [stepValue, setValueStep] = useState(1);

  return (
    <DataContainer stepValue={stepValue} style={{ border: '1px solid red' }}>
      {stepValue === 1 && (
        <Data
          title="Get closer to your goals!"
          subtitle="To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"
        >
          {/* <TestForm /> */}
          <DataForm stepValue={stepValue} setValueStep={setValueStep} />
        </Data>
      )}
      {stepValue === 2 && (
        <Data title="Get closer to your goals!">
          <DataForm stepValue={stepValue} setValueStep={setValueStep} />
        </Data>
      )}
      {stepValue === 3 && (
        <Data
          title="Dear user"
          subtitle="Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."
        >
          <DataForm stepValue={stepValue} setValueStep={setValueStep} />
        </Data>
      )}

      <DataProgressbar stepValue={stepValue} />
    </DataContainer>
  );
};

export default DataComponent;
