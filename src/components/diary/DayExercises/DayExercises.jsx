import ExercisesTable from '../ExercisesTable/ExercisesTable';
import sprite from '../../../assets/images/sprite/sprite.svg';
import { TailSpin } from 'react-loader-spinner';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DayExerDiv,
  DayExerText,
  LoaderDiv,
  DayExerTitle,
  DayExerDivList,
  AddExerBtn,
  AddExerBtnIcon,
  AddExerBtnText,
} from './DayExercises.styled';
import PropTypes from 'prop-types';

export default function DayExercises({
  diaryExercises,
  setDiaryExercises,
  isLoading,
}) {
  return (
    <DayExerDiv>
      <DayExerDivList>
        <DayExerTitle>Exercises</DayExerTitle>
        <AddExerBtn to="/exercises">
          <AddExerBtnText>Add exercise</AddExerBtnText>
          <AddExerBtnIcon>
            <use href={`${sprite}#big_arrow`}></use>
          </AddExerBtnIcon>
        </AddExerBtn>
      </DayExerDivList>
      {diaryExercises && diaryExercises.length !== 0 ? (
        <ExercisesTable
          diaryExercises={diaryExercises}
          setDiaryExercises={setDiaryExercises}
        />
      ) : (
        <>
          <AnimatePresence>
            {isLoading ? (
              <LoaderDiv>
                <TailSpin color="#E6533C" ariaLabel="three-dots-loading" />
              </LoaderDiv>
            ) : (
              <DayExerText
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
              >
                Not found exercises
              </DayExerText>
            )}
          </AnimatePresence>
        </>
      )}
    </DayExerDiv>
  );
}

DayExercises.propTypes = {
  isLoading: PropTypes.bool,

  diaryProducts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      groupBloodNotAllowed: PropTypes.shape({
        1: PropTypes.bool.isRequired,
        2: PropTypes.bool.isRequired,
        3: PropTypes.bool.isRequired,
        4: PropTypes.bool.isRequired,
      }),
      product_ID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ),
  diaryExercises: PropTypes.arrayOf(
    PropTypes.shape({
      bodyPart: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      exercise_ID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ),
};
