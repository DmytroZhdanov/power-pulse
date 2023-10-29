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
      <ExercisesCard gifUrl={gifUrl}>
        <ExercisesWrap>
          <Title>WORKOUT</Title>

          <Box className="start">
            <ButtonStart onClick={openModalExerciseForm}>
              <ButtonTitle className="start">Start</ButtonTitle>
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

          <Category className="target">
            Target:<Values>{UpperCase(target)}</Values>
          </Category>
        </Info>
      </ExercisesCard>
      {onShowModalExerciseForm && (
        <BasicModalWindow onClose={closeModalExerciseForm}>
          <AddExerciseForm
            exercise={props}
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
