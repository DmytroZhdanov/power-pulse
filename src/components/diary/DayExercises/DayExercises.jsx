import ExercisesTable from '../ExercisesTable/ExercisesTable';
import sprite from '../../../assets/images/sprite/sprite.svg';

import {
  DayProdDiv,
  DayProdTitle,
  DayProdUl,
  AddProdBtn,
  AddProdBtnIcon,
  AddProdBtnText
} from './DayExercises.styled'

export default function DayExercises() {
  return (
    <DayProdDiv>
      <DayProdUl>
        <DayProdTitle>Exercises</DayProdTitle>
        <AddProdBtn to='/exercises'><AddProdBtnText>Add exercise</AddProdBtnText><AddProdBtnIcon><use href={`${sprite}#big_arrow`}></use></AddProdBtnIcon></AddProdBtn>
      </DayProdUl>
      <ExercisesTable />
    </DayProdDiv>
  );
}
