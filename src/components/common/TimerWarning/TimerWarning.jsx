import { Container, Signature, Text, Title } from './TimerWarning.styled';

export default function TimerWarning() {
  return (
    <Container>
      <Title>Hello Fitness Enthusiast!</Title>

      <Text>
        In our free hosting world, occasionally your request might take a little
        longer after inactivity. Stay connected because we&apos;re gearing up
        for faster responses on your next calorie count or exercise hunt!
      </Text>

      <Signature>
        Best regards,
        <br /> The Fitness Platform Team
      </Signature>
    </Container>
  );
}
