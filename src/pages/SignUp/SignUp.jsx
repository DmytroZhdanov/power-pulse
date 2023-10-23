import SignUpForm from 'components/SignUpForm/SignUpForm';
import TitlePage from 'components/common/TitlePage/TitlePage';

export default function SignUp() {
  return (
    <>
      <TitlePage text={'Sign Up'}></TitlePage>
      <SignUpForm />
    </>
  );
}
