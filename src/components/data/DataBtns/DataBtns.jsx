import sprite from '../../../assets/images/sprite/sprite.svg';
import {
  ArrowBtnRight,
  ArrowBtnLeft,
  DataBtnsContainer,
  GoBtn,
  ArrowIcon,
} from './DataBtns.styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DATA_STEPS } from 'src/utils';
import { handleBack, handleNext } from '../helper/controlData';
const DataBtns = ({ step, formik }) => {
  const navigate = useNavigate();

  return (
    <DataBtnsContainer>
      {step === DATA_STEPS.THIRD && (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
          <GoBtn type="submit" id="btn">
            Go
          </GoBtn>
        </motion.div>
      )}

      {step !== DATA_STEPS.FIRST && (
        <motion.div whileHover={{ translateX: -2 }}>
          <ArrowBtnLeft
            type="button"
            onClick={() => {
              handleBack(step, navigate);
            }}
          >
            <ArrowIcon>
              <svg>
                <use href={`${sprite}#big-arrow-left`} />
              </svg>
            </ArrowIcon>
            Back
          </ArrowBtnLeft>
        </motion.div>
      )}
      {step !== DATA_STEPS.THIRD && (
        <motion.div>
          <ArrowBtnRight
            type="button"
            onClick={() => {
              handleNext(step, formik, navigate);
            }}
          >
            Next
            <ArrowIcon>
              <svg>
                <use href={`${sprite}#big-arrow-right`} />
              </svg>
            </ArrowIcon>
          </ArrowBtnRight>
        </motion.div>
      )}
    </DataBtnsContainer>
  );
};

export default DataBtns;
