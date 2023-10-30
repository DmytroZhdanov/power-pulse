import { DATA_STEPS } from '../../../utils';
import { DataContainer } from './DataHeader.styled';
const DataHeader = ({ step }) => {
  return (
    <DataContainer>
      {step === DATA_STEPS.FIRST && (
        <>
          <h2>Get closer to your goals!</h2>
          <h6>
            To ensure a personalized user experience and the proper functioning
            of our platform, we ask you to provide the following information
            about your weight, height and other relevant data:
          </h6>
        </>
      )}
      {step === DATA_STEPS.SECOND && (
        <>
          <h2>Get closer to your goals!</h2>
        </>
      )}
      {step === DATA_STEPS.THIRD && (
        <>
          <h2>Dear user</h2>
          <h6>
            Thank you for filling in all the required data. We greatly
            appreciate your cooperation and commitment to a healthy lifestyle.
            The collected information will allow us to provide you with a more
            individual and personalized approach.
          </h6>
        </>
      )}
    </DataContainer>
  );
};

export default DataHeader;
