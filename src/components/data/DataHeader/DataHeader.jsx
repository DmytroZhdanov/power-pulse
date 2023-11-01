import { DATA_STEPS } from '../../../utils';
import { DataContainer } from './DataHeader.styled';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../helper/motion';
const DataHeader = ({ step }) => {
  return (
    <motion.div
      key={step}
      variants={slideInFromLeft}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.4 }}
    >
      <DataContainer>
        {step === DATA_STEPS.FIRST && (
          <>
            <h1>Get closer to your goals!</h1>
            <p>
              To ensure a personalized user experience and the proper
              functioning of our platform, we ask you to provide the following
              information about your weight, height and other relevant data:
            </p>
          </>
        )}
        {step === DATA_STEPS.SECOND && (
          <>
            <h1>Get closer to your goals!</h1>
          </>
        )}
        {step === DATA_STEPS.THIRD && (
          <>
            <h1>Dear user</h1>
            <p>
              Thank you for filling in all the required data. We greatly
              appreciate your cooperation and commitment to a healthy lifestyle.
              The collected information will allow us to provide you with a more
              individual and personalized approach.
            </p>
          </>
        )}
      </DataContainer>
    </motion.div>
  );
};

export default DataHeader;
