import UpperCase from '../../common/UpperCaseFunc/UpperCase';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import AddExerciseSuccess from '../AddExerciseSuccess/AddExerciseSuccess';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useState } from 'react';
import {
  ExercisesCard,
  ExercisesWrap,
  Title,
  Box,
  Info,
  ExerciseName,
  ExerciseDiv,
  ButtonStart,
  ButtonTitle,
  Category,
  Values,
  SvgArrow,
  SvgRunMan,
} from './ExercisesItem.styled';
import { Svg } from '../ExercisesList/ExercisesList.styled';

export default function ExercisesItem({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  burnedCalories,
  time,
}) {
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

  const exercise = {
    _id,
    bodyPart,
    equipment,
    gifUrl,
    name,
    target,
    burnedCalories,
    time,
  };

  return (
    <>
      <ExercisesCard>
        <ExercisesWrap>
          <Title>WORKOUT</Title>

          <Box>
            <ButtonStart onClick={openModalExerciseForm}>
              <ButtonTitle>Start</ButtonTitle>
              <SvgArrow>
                <use href={`${sprite}#arrow-add-prod-orange`}></use>
              </SvgArrow>
            </ButtonStart>
          </Box>
        </ExercisesWrap>

        <ExerciseDiv>
          <SvgRunMan>
            <use href={`${sprite}#run-man`}></use>
          </SvgRunMan>

          <ExerciseName>{UpperCase(name)}</ExerciseName>
        </ExerciseDiv>

        <Info>
          <Category>
            Burned calories:<Values>{burnedCalories}</Values>
          </Category>

          <Category category={true}>
            Body part:<Values>{UpperCase(bodyPart)}</Values>
          </Category>

          <Category>
            Target:<Values>{UpperCase(target)}</Values>
          </Category>
        </Info>
      </ExercisesCard>
      {onShowModalExerciseForm && (
        <BasicModalWindow onClose={closeModalExerciseForm}>
          <AddExerciseForm
            exercise={exercise}
            openModalExerciseSuccess={openModalExerciseSuccess}
            closeModalExerciseForm={closeModalExerciseForm}
            setModalExerciseSuccessData={setModalExerciseSuccessData}
          />
        </BasicModalWindow>
      )}

      {onShowModalExerciseSuccess && (
        <BasicModalWindow onClose={closeModalExerciseSuccess}>
          <AddExerciseSuccess
            modalExerciseSuccessData={modalExerciseSuccessData}
            closeModalExerciseSuccess={closeModalExerciseSuccess}
          />
        </BasicModalWindow>
      )}
    </>
  );
}
