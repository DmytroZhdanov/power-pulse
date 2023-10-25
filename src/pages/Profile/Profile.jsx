import TitlePage from 'components/common/TitlePage/TitlePage';
import UserCard from 'components/profile/UserCard/UserCard';
import UserForm from 'components/profile/UserForm/UserForm';

export function Profile() {
  return (
    <>
      <div>Profile page</div>
      <TitlePage />
      <UserForm />
      <UserCard />
    </>
  );
}
