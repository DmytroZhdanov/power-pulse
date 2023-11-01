import {
  SettingsLink,
  SvgSettings,
  AvatarDiv,
  SvgDefault,
} from './UserBar.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserAvatars } from '../../../redux/auth/selectors';

export default function UserBar() {
  const avatars = useSelector(selectUserAvatars);

  return (
    <SettingsLink to="/profile">
      <SvgSettings>
        <use href={`${sprite}#settings`}></use>
      </SvgSettings>

      <AvatarDiv>
        {avatars ? (
          <picture>
            <source
              srcSet={`
                ${avatars.avatar_37x37}   37w,
                ${avatars.avatar_46x46}   46w,
                ${avatars.avatar_74x74} 74w,
                ${avatars.avatar_92x92}   92w
              `}
              sizes="(min-width: 768px) 46px, (min-width: 375px) 37px, 37px, 100vw"
              type="image/jpeg"
            />

            <img src={avatars.avatar_90x90} alt="Your avatar" loading="lazy" />
          </picture>
        ) : (
          <SvgDefault>
            <use href={`${sprite}#user`}></use>
          </SvgDefault>
        )}
      </AvatarDiv>
    </SettingsLink>
  );
}
