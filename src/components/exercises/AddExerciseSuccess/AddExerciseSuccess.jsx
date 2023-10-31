import PropTypes from 'prop-types';

import {
  Button,
  DiaryLink,
  ExerciseSuccessWrapDiv,
  Img,
  LinkIconSvg,
  ResultLabelSpan,
  ResultValueSpan,
  ResultWrapDiv,
  TextP,
  TitleH2,
} from './AddExerciseSuccess.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import thumbUpImage from 'src/assets/images/Success/thumb-up.webp';
import { ROUTER } from 'src/utils/constants';

export default function AddExerciseSuccess({
  closeModalExerciseSuccess,
  modalExerciseSuccessData,
}) {
  const { time = 0, calories = 0 } = modalExerciseSuccessData;

  const staticData = {
    wellDone: 'Well done',
    timeText: 'Your time:',
    caloriesText: 'Burned calories:',
    nextExerciseText: 'Next exercise',
    diaryLinkText: 'To the diary',
  };

  return (
    <ExerciseSuccessWrapDiv>
      <Img src={thumbUpImage} alt="thumb up" />

      <TitleH2>{staticData.wellDone}</TitleH2>

      <ResultWrapDiv>
        <TextP>
          <ResultLabelSpan>{staticData.timeText}</ResultLabelSpan>

          <ResultValueSpan> {time}</ResultValueSpan>
        </TextP>

        <TextP>
          <ResultLabelSpan>{staticData.caloriesText}</ResultLabelSpan>

          <ResultValueSpan>{calories}</ResultValueSpan>
        </TextP>
      </ResultWrapDiv>

      <Button onClick={closeModalExerciseSuccess} type="button">
        {staticData.nextExerciseText}
      </Button>

      <DiaryLink to={`/${ROUTER.DIARY}`}>
        <TextP> {staticData.diaryLinkText}</TextP>

        <LinkIconSvg>
          <use href={`${sprite}#arrow-add-prod`}></use>
        </LinkIconSvg>
      </DiaryLink>
    </ExerciseSuccessWrapDiv>
  );
}

AddExerciseSuccess.propTypes = {
  closeModalExerciseSuccess: PropTypes.func.isRequired,
  modalExerciseSuccessData: PropTypes.shape({
    time: PropTypes.number,
    calories: PropTypes.number,
  }),
};
