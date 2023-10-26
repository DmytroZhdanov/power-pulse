import ExercisesTable from '../ExercisesTable/ExercisesTable';
import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayExerDiv,
  DayExerTitle,
  DayExerUl,
  AddExerBtn,
  AddExerBtnIcon,
  AddExerBtnText
} from './DayExercises.styled'

export default function DayExercises() {
  return (
    <DayExerDiv>
      <DayExerUl>
        <DayExerTitle>Exercises</DayExerTitle>
        <AddExerBtn to='/exercises'><AddExerBtnText>Add exercise</AddExerBtnText><AddExerBtnIcon><use href={`${sprite}#big_arrow`}></use></AddExerBtnIcon></AddExerBtn>
      </DayExerUl>
      <ExercisesTable />
    </DayExerDiv>
  );
}
