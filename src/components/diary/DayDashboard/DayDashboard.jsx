import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  BlockItemLi,
  BlockListUl,
  ContainerDiv,
  ExclamationIcon,
  Icon,
  IconWrapperDiv,
  TextP,
  TextWrapperDiv,
  TitleH2,
  TitleWrapperDiv,
  ValueP,
} from './DayDashboard.styled';

import sprite from 'src/assets/images/sprite/sprite.svg';

export default function DayDashboard({
  bmrData,
  diaryProducts,
  diaryExercises,
}) {
  const [AllDayCalories, setAllDayCalories] = useState(null);
  const [AllDayExerCalories, setAllDayExerCalories] = useState(null);
  const [AllMinuts, setAllMinuts] = useState(null);

  useEffect(() => {
    if (diaryProducts.length === 0) {
      setAllDayCalories(null);
      return;
    }

    const CalOneProd = diaryProducts.map(product => product.calories);
    const AllCal = CalOneProd.reduce((total, amount) => total + amount);

    setAllDayCalories(AllCal);
  }, [diaryProducts]);

  useEffect(() => {
    if (diaryExercises.length === 0) {
      setAllDayExerCalories(null);
      return;
    }

    const CalOneExer = diaryExercises.map(exercise => exercise.calories);
    const AllExerCal = CalOneExer.reduce((total, amount) => total + amount);

    setAllDayExerCalories(AllExerCal);
  }, [diaryExercises]);

  useEffect(() => {
    if (diaryExercises.length === 0) {
      setAllMinuts(null);
      return;
    }

    const SecOneExer = diaryExercises.map(exercise => exercise.time);
    const AllSec = SecOneExer.reduce((total, amount) => total + amount);
    const AllInMinuts = Math.trunc(AllSec / 60);

    setAllMinuts(AllInMinuts);
  }, [diaryExercises]);

  return (
    <ContainerDiv>
      <BlockListUl>
        <BlockItemLi highlighted={true}>
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#food`}></use>
            </Icon>

            <TitleH2 highlighted={true}>Daily calory intake</TitleH2>
          </TitleWrapperDiv>

          <ValueP>{bmrData || 2200}</ValueP>
        </BlockItemLi>

        <BlockItemLi highlighted={true}>
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#dumbbell`}></use>
            </Icon>

            <TitleH2 highlighted={true}>Daily norm of sports</TitleH2>
          </TitleWrapperDiv>

          <ValueP>110 min</ValueP>
        </BlockItemLi>

        <BlockItemLi>
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#apple`}></use>
            </Icon>

            <TitleH2>Calories consumed</TitleH2>
          </TitleWrapperDiv>

          <ValueP>{AllDayCalories !== null ? AllDayCalories : 0}</ValueP>
        </BlockItemLi>

        <BlockItemLi>
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#fire`}></use>
            </Icon>

            <TitleH2>Calories burned</TitleH2>
          </TitleWrapperDiv>

          <ValueP>
            {AllDayExerCalories !== null ? AllDayExerCalories : 0}
          </ValueP>
        </BlockItemLi>

        <BlockItemLi
          caloriesOverConsumed={bmrData - AllDayCalories >= 0 ? false : true}
        >
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#bubble`}></use>
            </Icon>

            <TitleH2>The rest of the calories</TitleH2>
          </TitleWrapperDiv>

          <ValueP>{bmrData ? bmrData - AllDayCalories : 2200}</ValueP>
        </BlockItemLi>

        <BlockItemLi caloriesOverBurned={110 - AllMinuts < 0 ? true : false}>
          <TitleWrapperDiv>
            <Icon>
              <use href={`${sprite}#running`}></use>
            </Icon>

            <TitleH2>The rest of sports</TitleH2>
          </TitleWrapperDiv>

          <ValueP>{110 - AllMinuts} min</ValueP>
        </BlockItemLi>
      </BlockListUl>

      <TextWrapperDiv>
        <IconWrapperDiv>
          <ExclamationIcon>
            <use href={`${sprite}#exclamation-mark`}></use>
          </ExclamationIcon>
        </IconWrapperDiv>

        <TextP>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextP>
      </TextWrapperDiv>
    </ContainerDiv>
  );
}

DayDashboard.propTypes = {
  bmrData: PropTypes.number,
  diaryProducts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      groupBloodNotAllowed: PropTypes.shape({
        1: PropTypes.bool.isRequired,
        2: PropTypes.bool.isRequired,
        3: PropTypes.bool.isRequired,
        4: PropTypes.bool.isRequired,
      }),
      product_ID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  diaryExercises: PropTypes.arrayOf(
    PropTypes.shape({
      bodyPart: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      exercise_ID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
