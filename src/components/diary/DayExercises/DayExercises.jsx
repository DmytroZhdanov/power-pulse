import ExercisesTable from '../ExercisesTable/ExercisesTable';
import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayExerDiv,
  DayExerText,
  DayExerTitle,
  DayExerDivList,
  AddExerBtn,
  AddExerBtnIcon,
  AddExerBtnText,
} from './DayExercises.styled';

export default function DayExercises({ data, fetchDiaryExercises }) {
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
      {data && data.length !== 0 ? (
        <ExercisesTable fetchDiaryExercises={fetchDiaryExercises} data={data} />
      ) : (
        <DayExerText>Not found exercises</DayExerText>
      )}
    </DayExerDiv>
  );
}
