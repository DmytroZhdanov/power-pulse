import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import {
  ArrowBtnRight,
  ArrowBtnLeft,
  DataBtnsContainerDiv,
  GoBtn,
  ArrowIconDiv,
} from './DataBtns.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import { DATA_STEPS } from 'src/utils';
import { handleBack, handleNext } from 'components/data/helper/controlData';

const DataBtns = ({ step, formik, isDateSelected }) => {
  const navigate = useNavigate();

  return (
    <DataBtnsContainerDiv>
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
            <ArrowIconDiv>
              <svg>
                <use href={`${sprite}#big-arrow-left`} />
              </svg>
            </ArrowIconDiv>
            Back
          </ArrowBtnLeft>
        </motion.div>
      )}

      {step !== DATA_STEPS.THIRD && (
        <motion.div>
          <ArrowBtnRight
            type="button"
            onClick={() => {
              handleNext(step, formik, navigate, isDateSelected);
            }}
          >
            Next
            <ArrowIconDiv>
              <svg>
                <use href={`${sprite}#big-arrow-right`} />
              </svg>
            </ArrowIconDiv>
          </ArrowBtnRight>
        </motion.div>
      )}
    </DataBtnsContainerDiv>
  );
};

DataBtns.propTypes = {
  step: PropTypes.string,
  formik: PropTypes.object,
  isDateSelected: PropTypes.bool.isRequired,
};

export default DataBtns;
