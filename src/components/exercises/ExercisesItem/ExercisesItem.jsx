import { useState } from 'react';

import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from 'components/exercises/AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from 'components/exercises/AddExerciseSuccess/AddExerciseSuccess';
import {
  ExercisesCardDiv,
  ExercisesWrapDiv,
  TitleP,
  BoxDiv,
  InfoDiv,
  ExerciseNameH2,
  ExerciseDiv,
  ButtonStart,
  ButtonTitleP,
  CategoryP,
  ValuesSpan,
  SvgArrow,
  SvgRunMan,
} from './ExercisesItem.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';

export default function ExercisesItem(props) {
  const { bodyPart, gifUrl, name, target, burnedCalories } = props;

  const [onShowModalExerciseForm, setOnShowModalExerciseForm] = useState(false);
  const [onShowModalExerciseSuccess, setOnShowModalExerciseSuccess] =
    useState(false);
  const [modalExerciseSuccessData, setModalExerciseSuccessData] = useState({});

  const openModalExerciseForm = () => {
    setOnShowModalExerciseForm(true);
  };

  const openModalExerciseSuccess = () => {
    setOnShowModalExerciseSuccess(true);
  };

  const closeModalExerciseForm = () => {
    setOnShowModalExerciseForm(false);
  };

  const closeModalExerciseSuccess = () => {
    setOnShowModalExerciseSuccess(false);
  };

  return (
    <>
      <ExercisesCardDiv gifUrl={gifUrl}>
        <ExercisesWrapDiv>
          <TitleP>WORKOUT</TitleP>

          <BoxDiv className="start">
            <ButtonStart onClick={openModalExerciseForm}>
              <ButtonTitleP className="start">Start</ButtonTitleP>

              <SvgArrow>
                <use href={`${sprite}#arrow-add-prod-orange`}></use>
              </SvgArrow>
            </ButtonStart>
          </BoxDiv>
        </ExercisesWrapDiv>

        <ExerciseDiv>
          <SvgRunMan>
            <use href={`${sprite}#run-man`}></use>
          </SvgRunMan>

          <ExerciseNameH2>{name}</ExerciseNameH2>
        </ExerciseDiv>

        <InfoDiv>
          <CategoryP>
            Burned calories:<ValuesSpan>{burnedCalories}</ValuesSpan>
          </CategoryP>

          <CategoryP className="bodyPart" category={true}>
            Body part:<ValuesSpan>{bodyPart}</ValuesSpan>
          </CategoryP>

          <CategoryP className="target">
            Target:<ValuesSpan>{target}</ValuesSpan>
          </CategoryP>
        </InfoDiv>
      </ExercisesCardDiv>

      <BasicModalWindow
        onShow={onShowModalExerciseForm}
        onClose={closeModalExerciseForm}
      >
        <AddExerciseForm
          exercise={props}
          openModalExerciseSuccess={openModalExerciseSuccess}
          closeModalExerciseForm={closeModalExerciseForm}
          setModalExerciseSuccessData={setModalExerciseSuccessData}
        />
      </BasicModalWindow>

      <BasicModalWindow
        onShow={onShowModalExerciseSuccess}
        onClose={closeModalExerciseSuccess}
      >
        <AddExerciseSuccess
          modalExerciseSuccessData={modalExerciseSuccessData}
          closeModalExerciseSuccess={closeModalExerciseSuccess}
        />
      </BasicModalWindow>
    </>
  );
}
