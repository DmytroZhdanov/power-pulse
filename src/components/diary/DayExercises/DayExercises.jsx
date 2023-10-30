import ExercisesTable from '../ExercisesTable/ExercisesTable';
import sprite from '../../../assets/images/sprite/sprite.svg';
import { TailSpin } from 'react-loader-spinner';
import {
  DayExerDiv,
  DayExerText,
  DayExerTitle,
  DayExerDivList,
  LoaderDiv,
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
          {isLoading ? (
            <LoaderDiv>
              <TailSpin color="#E6533C" ariaLabel="three-dots-loading" />
            </LoaderDiv>
          ) : (
            <DayExerText>Not found exercises</DayExerText>
          )}
        </>
      )}
    </DayExerDiv>
  );
}
