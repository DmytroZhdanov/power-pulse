import PropTypes from 'prop-types';
import {
  Button,
  DiaryLink,
  ExerciseSuccessWrap,
  Img,
  LinkIcon,
  ResultLabel,
  ResultValue,
  ResultWrap,
  Text,
  Title,
} from './AddExerciseSuccess.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';
import thumbUpImage from 'src/assets/images/Success/thumb-up.webp';

import { ROUTER } from 'src/utils/constants';

export default function AddExerciseSuccess({
  closeModalExerciseSuccess,
  modalExerciseSuccessData,
}) {
  const { time, calories } = modalExerciseSuccessData;

  const staticData = {
    wellDone: 'Well done',
    timeText: 'Your time:',
    caloriesText: 'Burned calories:',
    nextExerciseText: 'Next exercise',
    diaryLinkText: 'To the diary',
  };

  return (
    <ExerciseSuccessWrap>
      <Img src={thumbUpImage} alt="thumb up" />

      <Title>{staticData.wellDone}</Title>

      <ResultWrap>
        <Text>
          <ResultLabel>{staticData.timeText}</ResultLabel>
          <ResultValue> {time}</ResultValue>
        </Text>

        <Text>
          <ResultLabel>{staticData.caloriesText}</ResultLabel>
          <ResultValue>{calories}</ResultValue>
        </Text>
      </ResultWrap>

      <Button onClick={closeModalExerciseSuccess} type="button">
        {staticData.nextExerciseText}
      </Button>

      <DiaryLink to={`/${ROUTER.DIARY}`}>
        <Text> {staticData.diaryLinkText}</Text>
        <LinkIcon>
          <use href={`${sprite}#arrow-add-prod`}></use>
        </LinkIcon>
      </DiaryLink>
    </ExerciseSuccessWrap>
  );
}

AddExerciseSuccess.propTypes = {
  closeModalExerciseSuccess: PropTypes.func.isRequired,
  modalExerciseSuccessData: PropTypes.shape({
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
};
