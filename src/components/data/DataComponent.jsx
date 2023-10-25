import Data from './Data/DataStep';
import { DataContainer, LogoContainer } from './DataComponent.styled';
import DataForm from './DataForm/DataForm';
import DataProgressbar from './DataProgressbar/DataProgressbar';
import { useState } from 'react';
import TestForm from './TestForm';
import Logo from '../main/Logo/Logo';
import StatisticsInfo from '../main/StatisticsInfo/StatisticsInfo';
import { DataInfoOrange } from './DataStatisticsInfo/DataStatisticsInfo';

const DataComponent = () => {
  const [stepValue, setValueStep] = useState(1);
  const imgs = {
    bgUsers: '/src/assets/images/background/Desktop/bg_users.jpg',
    bgHourse: '/src/assets/images/background/Desktop/bg_hours.jpg',
    bgEx: '/src/assets/images/background/Desktop/bg_ex.jpg',
  };

  const getBg = (stepValue, imgs) => {
    switch (stepValue) {
      case 1:
        return imgs.bgUsers;
      case 2:
        return imgs.bgHourse;
      case 3:
        return imgs.bgEx;
      default:
        return '#303030';
    }
  };

  return (
    <DataContainer
      style={{ border: '1px solid red' }}
      stepValue={stepValue}
      bg={getBg(stepValue, imgs)}
    >
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <div>
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
      </div>

      <div>
        <DataInfoOrange stepValue={stepValue} />
        {/* <StatisticsInfo /> */}
      </div>
    </DataContainer>
  );
};

export default DataComponent;
