import { TailSpin } from 'react-loader-spinner';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import ExercisesTable from 'components/diary/ExercisesTable/ExercisesTable';
import {
  DayExerDiv,
  DayExerTextP,
  LoaderDiv,
  DayExerTitleH2,
  DayExerListDiv,
  AddExerBtnLink,
  AddExerBtnIcon,
  AddExerBtnTextP,
} from './DayExercises.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';

export default function DayExercises({
  diaryExercises,
  setDiaryExercises,
  isLoading,
}) {
  return (
    <DayExerDiv>
      <DayExerListDiv>
        <DayExerTitleH2>Exercises</DayExerTitleH2>

        <AddExerBtnLink to="/exercises">
          <AddExerBtnTextP>Add exercise</AddExerBtnTextP>

          <AddExerBtnIcon>
            <use href={`${sprite}#big_arrow`}></use>
          </AddExerBtnIcon>
        </AddExerBtnLink>
      </DayExerListDiv>

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
              <DayExerTextP
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
              >
                Not found exercises
              </DayExerTextP>
            )}
          </AnimatePresence>
        </>
      )}
    </DayExerDiv>
  );
}

DayExercises.propTypes = {
  isLoading: PropTypes.bool,
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
  ).isRequired,
  setDiaryExercises: PropTypes.func.isRequired,
};
