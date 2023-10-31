import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'react-router-dom';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Icon from 'src/components/common/IconsComp/Icon';
import { selectUserAvatars } from 'src/redux/auth/selectors';

import {
  useUpdateUserAvatarMutation,
  useLazyRefreshQuery,
} from 'src/redux/api';
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
import { setAvatars } from '../../../redux/auth/authSlice';
import axios from 'axios';

export default function UserCard() {
  const [updateUserAvatar] = useUpdateUserAvatarMutation();
  const [refresh, { data, isLoading, isError }] = useLazyRefreshQuery();

  const isAvatar = useSelector(selectUserAvatars);
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState(null);

  console.log(avatarUrl);

  useEffect(() => {
    const fetch = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetch();
  }, [refresh]);

  const handleChange = async e => {
    e.preventDefault();
    try {
      const result = e.target.files[0];

      const data = await updateUserAvatar(result).unwrap();
      dispatch(setAvatars(data));
    } catch (error) {}
  };

  return (
    <>
      {data && (
        <User>
          <Avatar>
            <Image>
              {isAvatar ? (
                <div>
                  <img src={isAvatar} alt="Your avatar" />
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
              <MainText>{data.user.name}</MainText>
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
              We understand that each individual is unique, so the entire
              approach to diet is relative and tailored to your unique body and
              goals.
            </SecondText>
          </Warnings>
          <BtnLogout>{<LogOutBtn />}</BtnLogout>
        </User>
      )}
    </>
  );
}
