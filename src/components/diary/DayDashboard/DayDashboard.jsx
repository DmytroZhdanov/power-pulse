import {
  BlockItem,
  BlockList,
  Container,
  ExclamationIcon,
  Icon,
  IconWrapper,
  Text,
  TextWrapper,
  Title,
  TitleWrapper,
  Value,
} from './DayDashboard.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
// import { useFetchDailyRateQuery } from '../../../redux/api';
import { useEffect, useState } from 'react';

export default function DayDashboard({bmrData, diaryProducts, diaryExercises}) {
  const allCalories = (array) =>{
    console.log(array)
    const CalOneProd = array.map(product => product.calories)
    const AllCal = CalOneProd.reduce((total, amount) => total + amount); 
    return AllCal
  }
  const allExerCalories = (array) =>{
    const CalOneProd = array.map(product => product.calories)
    const AllCal = CalOneProd.reduce((total, amount) => total + amount); 
    return AllCal
  }
  return (
    <Container>
      <BlockList>
        <BlockItem highlighted={true}>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#food`}></use>
            </Icon>

            <Title highlighted={true}>Daily calory intake</Title>
          </TitleWrapper>

          <Value>{bmrData || 2200}</Value>
        </BlockItem>

        <BlockItem highlighted={true}>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#dumbbell`}></use>
            </Icon>

            <Title highlighted={true}>Daily norm of sports</Title>
          </TitleWrapper>

          <Value>110 min</Value>
        </BlockItem>

        <BlockItem>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#apple`}></use>
            </Icon>

            <Title>Calories consumed</Title>
          </TitleWrapper>

          <Value>{diaryProducts && diaryProducts.length !== 0 ?  allCalories(diaryProducts) : 0}</Value>
        </BlockItem>

        <BlockItem>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#fire`}></use>
            </Icon>

            <Title>Calories burned</Title>
          </TitleWrapper>

          <Value>{diaryExercises && diaryExercises.length !== 0 ?  allExerCalories(diaryExercises) : 0}</Value>
        </BlockItem>

        <BlockItem caloriesOverConsumed={true}>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#bubble`}></use>
            </Icon>

            <Title>The rest of the calories</Title>
          </TitleWrapper>

          <Value>1493</Value>
        </BlockItem>

        <BlockItem caloriesOverBurned={true}>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#running`}></use>
            </Icon>

            <Title>The rest of sports</Title>
          </TitleWrapper>

          <Value>85 min</Value>
        </BlockItem>
      </BlockList>

      <TextWrapper>
        <IconWrapper>
          <ExclamationIcon>
            <use href={`${sprite}#exclamation-mark`}></use>
          </ExclamationIcon>
        </IconWrapper>

        <Text>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </Text>
      </TextWrapper>
    </Container>
  );
}
