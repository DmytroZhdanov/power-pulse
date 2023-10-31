import {
  SettingsLink,
  SvgSettings,
  AvatarDiv,
  SvgDefault,
} from './UserBar.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function UserBar() {
  return (
    <SettingsLink to="/profile">
      <SvgSettings>
        <use href={`${sprite}#settings`}></use>
      </SvgSettings>

      <AvatarDiv>
        <SvgDefault>
          <use href={`${sprite}#user`}></use>
        </SvgDefault>
      </AvatarDiv>
    </SettingsLink>
  );
}
