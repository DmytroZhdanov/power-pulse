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
