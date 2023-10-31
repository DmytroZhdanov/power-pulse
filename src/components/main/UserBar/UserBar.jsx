import {
  SettingsLink,
  SvgSettings,
  AvatarDiv,
  SvgDefault,
  AvatarWrapDiv,
} from './UserBar.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectUserAvatars } from 'src/redux/auth/selectors';
import Icon from 'src/components/common/IconsComp/Icon';
import AvatarModal from '../../AvatarModal/AvatarModal';
export default function UserBar() {
  const [showModal, setShowModal] = useState(false);

  const userAvatar = useSelector(selectUserAvatars);
  console.log(userAvatar);

  const handleOpenClick = () => {
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
        <SvgDefault>
          <use href={`${sprite}#user`}></use>
        </SvgDefault>
      </AvatarDiv>
      {showModal && (
        <AvatarModal onClose={handleCloseClick}>
          <AvatarWrapDiv>
            {userAvatar ? (
              <img alt="your avatar" src={userAvatar[0]} />
            ) : (
              <Icon name="user" />
            )}
          </AvatarWrapDiv>
        </AvatarModal>
      )}
    </>
  );
}
