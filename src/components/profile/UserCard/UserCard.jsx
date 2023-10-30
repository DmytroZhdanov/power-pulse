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

export default function UserCard() {
  const [updateUserAvatar] = useUpdateUserAvatarMutation();
  const [refresh, { data, isLoading, isError }] = useLazyRefreshQuery();
  const isAvatar = useSelector(selectUserAvatars);
  const dispatch = useDispatch();

  console.log(isAvatar);

  const [avatarUrls, setAvatarUrls] = useState('');

  const handleChange = async e => {
    e.preventDefault();
    const avatar = URL.createObjectURL(e.target.files[0]);
    setAvatarUrls(avatar);
  };

  console.log(avatarUrls);

  useEffect(() => {
    const fetch = async () => {
      try {
        await refresh();

        if (avatarUrls) {
          const data = await updateUserAvatar(avatarUrls).unwrap();
          // dispatch( add..(data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        // await refresh();
      }
    };
    fetch();
  }, [refresh, updateUserAvatar]);

  return (
    <>
      {data && (
        <User>
          <Avatar>
            <Image>
              {isAvatar ? (
                <img src={data.user.avatarUrls} alt="Your avatar" />
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
