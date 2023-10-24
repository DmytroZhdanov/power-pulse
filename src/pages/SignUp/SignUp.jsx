import SignUpForm from 'components/SignUpForm/SignUpForm';
import TitlePage from 'components/common/TitlePage/TitlePage';
import { Container } from './SignUp.styled';

export default function SignUp() {
  return (
    <Container>
      <TitlePage text={'Sign Up'}></TitlePage>
      <SignUpForm />
    </Container>
  );
}
