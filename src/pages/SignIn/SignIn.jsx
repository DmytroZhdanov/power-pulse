import SignInForm from 'components/SignInForm/SignInForm';
import TitlePage from '../../components/common/TitlePage/TitlePage';
import { Container } from './SignIn.styled';

export default function SignIn() {
  return (
    <Container>
      <TitlePage text={'Sign In'} />
      <SignInForm />
    </Container>
  );
}
