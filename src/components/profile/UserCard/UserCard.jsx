import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Icon from 'src/components/common/IconsComp/Icon';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import {
  UserDiv,
  AvatarDiv,
  ImageDiv,
  BtnAvatarLabel,
  NameDiv,
  MainTextP,
  SecondTextP,
  AddTextP,
  DailyDiv,
  CaloriesDiv,
  SportTimeDiv,
  WarningsDiv,
  BtnLogoutDiv,
} from './UserCard.styled';

import { selectUserAvatars, selectUserName } from 'src/redux/auth/selectors';
import { useUpdateUserAvatarMutation } from 'src/redux/api';
import { setAvatars } from 'src/redux/auth/authSlice';
import { useLazyFetchDailyRateQuery } from 'src/redux/api';

export default function UserCard({ fetchBmr, setFetchBmr }) {
  const [
    updateUserAvatar,
    {
      isLoading: isUpdateAvatarLoading,
      isError: isUpdateAvatarError,
      error: updateAvatarError,
    },
  ] = useUpdateUserAvatarMutation();

  const [
    fetchDailyRate,
    {
      data: bmr,
      isLoading: isFetchBMRLoading,
      isError: isFetchBMRError,
      error: fetchBMRError,
    },
  ] = useLazyFetchDailyRateQuery();

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const avatars = useSelector(selectUserAvatars);

  useEffect(() => {
    const fetch = async () => {
      await fetchDailyRate();
    };

    if (fetchBmr) {
      fetch();
      setFetchBmr(false);
    }
  }, [fetchBmr, fetchDailyRate, setFetchBmr]);

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
      <UserDiv>
        <AvatarDiv>
          <ImageDiv>
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
            <BtnAvatarLabel htmlFor="avatarUrls">
              <input
                type="file"
                name="avatar"
                id="avatarUrls"
                accept="image/*"
                onChange={handleChange}
              />
              <Icon name="add_avatar" />
            </BtnAvatarLabel>
          </ImageDiv>

          <NameDiv>
            <MainTextP>{userName}</MainTextP>

            <SecondTextP>User</SecondTextP>
          </NameDiv>
        </AvatarDiv>

        <DailyDiv>
          <CaloriesDiv>
            <AddTextP>
              <Icon name="food" />
              Daily calorie intake
            </AddTextP>

            <MainTextP>{bmr || 2200}</MainTextP>
          </CaloriesDiv>

          <SportTimeDiv>
            <AddTextP>
              <Icon name="dumbbell" />
              Daily norm of sports
            </AddTextP>

            <MainTextP>110 min</MainTextP>
          </SportTimeDiv>
        </DailyDiv>

        <WarningsDiv>
          <SecondTextP>
            <Icon name="note" />
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </SecondTextP>
        </WarningsDiv>

        <BtnLogoutDiv>{<LogOutBtn />}</BtnLogoutDiv>
      </UserDiv>

      <ErrorHandler
        isLoading={isUpdateAvatarLoading}
        isError={isUpdateAvatarError}
        error={updateAvatarError}
      />

      <ErrorHandler
        isLoading={isFetchBMRLoading}
        isError={isFetchBMRError}
        error={fetchBMRError}
      />
    </>
  );
}

UserCard.propTypes = {
  fetchBmr: PropTypes.bool.isRequired,
  setFetchBmr: PropTypes.func.isRequired,
};
