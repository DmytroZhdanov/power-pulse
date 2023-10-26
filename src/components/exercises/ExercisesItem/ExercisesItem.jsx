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
} from './ExercisesItem.styled';

export default function ExercisesItem({
  name,
  bodyPart,
  burnedCalories,
  target,
}) {
  return (
    <>
      <ExercisesCard>
        <ExercisesWrap>
          <Title>Workout</Title>

          <Box>
            <ButtonStart>
              <ButtonTitle>Start</ButtonTitle>
              <svg width="16" height="16">
                <use href="/src/assets/images/sprite/sprite.svg#arrow-add-prod-orange"></use>
              </svg>
            </ButtonStart>
          </Box>
        </ExercisesWrap>

        <ExerciseDiv>
          <svg width="24" height="24">
            <use href="/src/assets/images/sprite/sprite.svg#run-man"></use>
          </svg>

          <ExerciseName>{name}</ExerciseName>
        </ExerciseDiv>

        <Info>
          <Category>
            Burned calories:<Values>{burnedCalories}</Values>
          </Category>

          <Category category={true}>
            Body part:<Values>{bodyPart}</Values>
          </Category>

          <Category>
            Target:<Values>{target}</Values>
          </Category>
        </Info>
      </ExercisesCard>
    </>
  );
}
