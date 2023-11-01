
import { useState, useEffect } from 'react';
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

export default function DayDashboard({bmrData, diaryProducts, diaryExercises}) {
  const [AllDayCalories, setAllDayCalories] = useState(null);
  const [AllDayExerCalories, setAllDayExerCalories] = useState(null);
  const [AllMinuts, setAllMinuts] = useState(null);

  useEffect(() => {
    if(diaryProducts.length === 0){
      setAllDayCalories(null)
      return
    }
    const CalOneProd = diaryProducts.map(product => product.calories)
    const AllCal = CalOneProd.reduce((total, amount) => total + amount); 
    setAllDayCalories(AllCal)
  }),[diaryProducts]

  useEffect(()=> {
    if(diaryExercises.length === 0){
      setAllDayExerCalories(null)
      setAllMinuts(null)
      return
    }
    const CalOneExer = diaryExercises.map(exercise => exercise.calories)
    const AllExerCal = CalOneExer.reduce((total, amount) => total + amount); 
    const MinOneExer = diaryExercises.map(exercise => exercise.time)
    const AllMin = MinOneExer.reduce((total, amount) => total + amount); 
    setAllDayExerCalories(AllExerCal)
    
  }), [diaryExercises]

  useEffect(() => {
    if(diaryExercises.length === 0){
      setAllMinuts(null)
      return
    }
    const SecOneExer = diaryExercises.map(exercise => exercise.time)
    const AllSec = SecOneExer.reduce((total, amount) => total + amount); 
    const AllInMinuts = Math.trunc(AllSec/60)
    setAllMinuts(AllInMinuts)
  }), [diaryExercises]
  
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
          
          <Value>{AllDayCalories !== null ?  AllDayCalories : 0}</Value>
        </BlockItem>

        <BlockItem>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#fire`}></use>
            </Icon>

            <Title>Calories burned</Title>
          </TitleWrapper>

          <Value>{AllDayExerCalories !== null ? AllDayExerCalories : 0}</Value>
        </BlockItem>

        <BlockItem caloriesOverConsumed={
          bmrData - AllDayCalories >= 0 ? false : true
        }>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#bubble`}></use>
            </Icon>

            <Title>The rest of the calories</Title>
          </TitleWrapper>

          <Value>{bmrData - AllDayCalories}</Value>
        </BlockItem>

        <BlockItem caloriesOverBurned={110 - AllMinuts < 0 ? true : false}>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#running`}></use>
            </Icon>

            <Title>The rest of sports</Title>
          </TitleWrapper>

          <Value>{110 - AllMinuts} min</Value>
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
