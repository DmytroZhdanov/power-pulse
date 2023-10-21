import {
  SettingsLink,
  SvgSettings,
  Avatar,
  SvgDefault,
} from './UserBar.styled';
import sprite from '../../../assets/images/sprite/sprite.svg';

export default function UserBar() {
  return (
    <SettingsLink to="/profile">
      <SvgSettings>
        <use href={`${sprite}#settings`}></use>
      </SvgSettings>
      <Avatar>
        <SvgDefault>
          <use href={`${sprite}#user`}></use>
        </SvgDefault>
      </Avatar>
    </SettingsLink>
  );
}
