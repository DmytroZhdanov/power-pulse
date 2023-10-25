import sprite from '../../../assets/images/sprite/sprite.svg';
import { handleBack, handleNext } from '../helper/controlData';
import {
  ArrowBtnRight,
  ArrowBtnLeft,
  DataBtnsContainer,
  GoBtn,
} from './DataBtns.styled';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

const DataBtns = ({ stepValue, setValueStep, formik }) => {
  const dispatch = useDispatch();

  return (
    <DataBtnsContainer>
      {stepValue === 3 && (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
          <GoBtn type="submit" id="btn">
            Go
          </GoBtn>
        </motion.div>
      )}

      {stepValue !== 1 && (
        <motion.div whileHover={{ translateX: -2 }}>
          <ArrowBtnLeft
            type="button"
            onClick={() => handleBack(stepValue, setValueStep)}
          >
            <svg style={{ transform: 'rotate(180deg)' }}>
              <use href={`${sprite}#big_arrow`} />
            </svg>
            Back
          </ArrowBtnLeft>
        </motion.div>
      )}
      {stepValue !== 3 && (
        <motion.div>
          <ArrowBtnRight
            type="button"
            onClick={() =>
              handleNext(stepValue, setValueStep, dispatch, formik)
            }
          >
            Next
            <svg>
              <use href={`${sprite}#big_arrow`} />
            </svg>
          </ArrowBtnRight>
        </motion.div>
      )}
    </DataBtnsContainer>
  );
};

export default DataBtns;
