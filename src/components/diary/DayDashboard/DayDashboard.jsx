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

export default function DayDashboard() {
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

          <Value>2200</Value>
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

          <Value>707</Value>
        </BlockItem>

        <BlockItem>
          <TitleWrapper>
            <Icon>
              <use href={`${sprite}#fire`}></use>
            </Icon>

            <Title>Calories burned</Title>
          </TitleWrapper>

          <Value>855</Value>
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