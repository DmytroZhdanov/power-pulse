import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Logo from '../Logo/Logo';
import UserBar from '../UserBar/UserBar';
import UserNav from '../UserNav/UserNav';

export default function Header() {
  return (
    <>
      <div>Header component</div>
      <Logo />
      <UserNav />
      <UserBar />
      <LogOutBtn />
    </>
  );
}
