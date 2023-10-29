import { DataContainer } from './DataStep.style';
import { motion } from 'framer-motion';

export const slideInFromLeft = {
  hidden: { x: '-100%' },
  visible: { x: '0%' },
};

const Data = ({ title, subtitle, children }) => {
  return (
    <motion.div
      variants={slideInFromLeft}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <DataContainer>
        <div style={{ width: '496px', marginBottom: '54px' }}>
          <h2>{title}</h2>
          <h6>{subtitle}</h6>
        </div>

        {children}
      </DataContainer>
    </motion.div>
  );
};

export default Data;
