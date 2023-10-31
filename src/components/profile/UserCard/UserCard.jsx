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
import { setAvatars, setCredentials } from '../../../redux/auth/authSlice';

export default function UserCard() {
  const [updateUserAvatar] = useUpdateUserAvatarMutation();
  const [refresh, { data, isLoading, isError }] = useLazyRefreshQuery();
  const isAvatar = useSelector(selectUserAvatars);
  const dispatch = useDispatch();
  const [avatarUrls, setAvatarUrls] = useState('');
  // console.log(isAvatar);

  // console.log('avatar', avatarUrls);

  useEffect(() => {
    const fetch = async () => {
      try {
        await refresh();
      } catch (error) {
        // console.log(error);
      } finally {
      }
    };
    fetch();
  }, [refresh]);
  // console.log(data);

  // const handleChange = e => {
  //   // const result = e.target.files[0];
  //   // console.log(result);
  //   // const formData = new FormData();
  //   // formData.append('avatar', result);
  //   // setAvatarUrls(result);
  //   // console.log(formData);
  //   // e.preventDefault();
  //   let reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setAvatarUrls(reader.result);
  //   };

  //   reader.onerror = error => {
  //     console.log('error', error);
  //   };
  // };

  const handleChange = e => {
    // e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async () => {
      const result = reader.result;
      // setAvatarUrls(re);
      try {
        const data = await updateUserAvatar(result).unwrap();
        // console.log(data);

        dispatch(setAvatars({ data }));
        // await refresh();
      } catch (error) {
        // console.log(error);
      }
    };

    reader.onerror = error => {
      // console.log('error', error);
    };
  };

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
