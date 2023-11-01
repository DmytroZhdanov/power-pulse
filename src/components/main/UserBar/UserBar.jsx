import {
  SettingsLink,
  SvgSettings,
  AvatarDiv,
  AvatarModalDiv,
  SvgDefault,
} from './UserBar.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserAvatars } from '../../../redux/auth/selectors';
import AvatarModal from '../../AvatarModal/AvatarModal';
import { useState } from 'react';

export default function UserBar() {
  const avatars = useSelector(selectUserAvatars);

  const [showModal, setShowModal] = useState(false);

  const handleOpenClick = () => {
    if (!avatars) {
      return;
    }
    setShowModal(true);
  };
  const handleCloseClick = () => {
    setShowModal(false);
  };

  return (
    <>
      <SettingsLink to="/profile">
        <SvgSettings>
          <use href={`${sprite}#settings`}></use>
        </SvgSettings>
      </SettingsLink>
      <AvatarDiv onClick={handleOpenClick}>
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
      {showModal && avatars && (
        <AvatarModal onClose={handleCloseClick}>
          <AvatarModalDiv>
            <picture>
              <source
                srcSet={`
                ${avatars.avatar_150x150}   150w,
                ${avatars.avatar_250x250}   250w,
                ${avatars.avatar_350x350} 350w,
                ${avatars.avatar_450x450}   450w
              `}
                type="image/jpeg"
                sizes="(min-width: 1440px) 450px ,(min-width: 768px) 350px , (min-width: 375px) 250px "
              />

              <img
                src={avatars.avatar_140x140}
                alt="Your avatar"
                width="100%"
                loading="lazy"
                style={{ borderRadius: '50%' }}
              />
            </picture>
          </AvatarModalDiv>
        </AvatarModal>
      )}
    </>
  );
}
