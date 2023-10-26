import TitlePage from 'components/common/TitlePage/TitlePage';
import UserCard from 'components/profile/UserCard/UserCard';
import UserForm from 'components/profile/UserForm/UserForm';

import { UserSection, UserWrapper } from './Profile.styled.';

export function Profile() {
  return (
    <UserSection>
      <TitlePage text="Profile Settings" />
      <UserWrapper>
        <UserCard />
        <UserForm />
      </UserWrapper>
    </UserSection>
  );
}
