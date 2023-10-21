// import { Link } from 'react-router-dom';
import { ROUTER } from '../../utils/constants';
import { Button, ButtonWrapper, Span, Title } from './Welcome.styled';

export default function Welcome() {
  return (
    <>
      <Title>
        Transforming your <Span>body</Span> shape with Power Pulse
      </Title>
      <ButtonWrapper>
        <Button to={ROUTER.SIGN_UP}>Sign Up</Button>
        <Button to={ROUTER.SIGN_IN}>Sign In</Button>
      </ButtonWrapper>
    </>
  );
}
