import {
  ContainerDiv,
  SignatureP,
  TextP,
  TitleH2,
} from './TimerWarning.styled';

export default function TimerWarning() {
  return (
    <ContainerDiv>
      <TitleH2>Hello Fitness Enthusiast!</TitleH2>

      <TextP>
        In our free hosting world, occasionally your request might take a little
        longer after inactivity. Stay connected because we&apos;re gearing up
        for faster responses on your next calorie count or exercise hunt!
      </TextP>

      <SignatureP>
        Best regards,
        <br /> The PowerPulse Platform Team
      </SignatureP>
    </ContainerDiv>
  );
}
