import { useDispatch, useSelector } from 'react-redux';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Icon from 'src/components/common/IconsComp/Icon';
import { selectUserAvatars, selectUserName } from 'src/redux/auth/selectors';

import { useUpdateUserAvatarMutation } from 'src/redux/api';
import {
  User,
  Avatar,
  Image,
  BtnAvat,
  Name,
  MainText,
  SecondText,
  AddText,
  Daily,
  Calories,
  SportTime,
  Warnings,
  BtnLogout,
} from './UserCard.styled';
import { setAvatars } from 'src/redux/auth/authSlice';
import ErrorHandler from '../../common/ErrorHandler/ErrorHandler';

export default function UserCard() {
  const [updateUserAvatar, { isLoading, isError, error }] =
    useUpdateUserAvatarMutation();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const avatars = useSelector(selectUserAvatars);

  const handleChange = async e => {
    e.preventDefault();

    try {
      const result = e.target.files[0];
      const data = await updateUserAvatar(result).unwrap();
      dispatch(setAvatars(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <User>
        <Avatar>
          <Image>
            {avatars ? (
              <div>
                <picture>
                  <source
                    srcSet={`
              ${avatars.avatar_90x90}   90w,
              ${avatars.avatar_150x150}   150w,
              ${avatars.avatar_180x180} 180w,
              ${avatars.avatar_300x300}   300w
                    `}
                    sizes="(min-width: 768px) 150px, (min-width: 375px) 90px, 90px, 100vw"
                    type="image/jpeg"
                  />

                  <img
                    src={avatars.avatar_90x90}
                    alt="Your avatar"
                    loading="lazy"
                  />
                </picture>
              </div>
            ) : (
              <Icon name="user" />
            )}
            <BtnAvat htmlFor="avatarUrls">
              <input
                type="file"
                name="avatar"
                id="avatarUrls"
                accept="image/*"
                onChange={handleChange}
              />
              <Icon name="add_avatar" />
            </BtnAvat>
          </Image>

          <Name>
            <MainText>{userName}</MainText>

            <SecondText>User</SecondText>
          </Name>
        </Avatar>

        <Daily>
          <Calories>
            <AddText>
              <Icon name="food" />
              Daily calorie intake
            </AddText>

            <MainText>0</MainText>
          </Calories>

          <SportTime>
            <AddText>
              <Icon name="dumbbell" />
              Daily norm of sports
            </AddText>

            <MainText>0 min</MainText>
          </SportTime>
        </Daily>

        <Warnings>
          <SecondText>
            <Icon name="note" />
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </SecondText>
        </Warnings>

        <BtnLogout>{<LogOutBtn />}</BtnLogout>
      </User>

      <ErrorHandler isLoading={isLoading} isError={isError} error={error} />
    </>
  );
}
