import Data from './Data/DataStep';
import { DataContainer } from './DataComponent.styled';
import DataForm from './DataForm/DataForm';
import DataProgressbar from './DataProgressbar/DataProgressbar';
import Logo from '../main/Logo/Logo';
// import StatisticsInfo from '../main/StatisticsInfo/StatisticsInfo';
import { stepValueForm } from '../../redux/dataPage/selectors';
import { DataInfoOrange } from './DataStatisticsInfo/DataStatisticsInfo';
import { useDispatch, useSelector } from 'react-redux';

const DataComponent = () => {
  const stepValue = useSelector(stepValueForm);

  return (
    <DataContainer stepValue={stepValue}>
      {stepValue === 1 && (
        <Data
          title="Get closer to your goals!"
          subtitle="To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"
        >
          {/* <TestForm /> */}
          <DataForm stepValue={stepValue} />
        </Data>
      )}
      {stepValue === 2 && (
        <Data title="Get closer to your goals!">
          <DataForm stepValue={stepValue} />
        </Data>
      )}
      {stepValue === 3 && (
        <Data
          title="Dear user"
          subtitle="Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."
        >
          <DataForm stepValue={stepValue} />
        </Data>
      )}
      <div
        style={{
          marginTop: 'auto',
        }}
      >
        <DataProgressbar stepValue={stepValue} />
      </div>
    </DataContainer>
  );
};

export default DataComponent;
