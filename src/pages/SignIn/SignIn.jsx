import SignInForm from 'components/SignInForm/SignInForm';
import TitlePage from 'components/common/TitlePage/TitlePage';

export default function SignIn() {
  return (
    <>
      <TitlePage text={'Sign In'}></TitlePage>
      <SignInForm />
    </>
  );
}
