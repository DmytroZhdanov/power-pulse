import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';

import Icon from '../../../components/common/IconsComp/Icon';

import { useState } from 'react';

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

const defaultImg =
  'https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg';

export default function UserCard() {
  const [avatar, setavatar] = useState(defaultImg);
  const [name, setName] = useState('Anna Rybachok');
  const [calories, setСalories] = useState(0);
  const [sportTime, setSportTime] = useState(0);

  return (
    <User>
      <Avatar>
        <Image>
          <img
            src={
              avatar
              // ? `https://image.tmdb.org/t/p/w500${profile_path}`
              // : defaultImg
            }
            alt="Your avatar"
          />

          <BtnAvat type="button">
            <Icon name="add_avatar" />
          </BtnAvat>
        </Image>
        <Name>
          <MainText>{name}</MainText>
          <SecondText>User</SecondText>
        </Name>
      </Avatar>

      <Daily>
        <Calories>
          <AddText>
            <Icon name="food" />
            Daily calorie intake
          </AddText>
          <MainText>{calories}</MainText>
        </Calories>
        <SportTime>
          <AddText>
            <Icon name="dumbbell" />
            Daily norm of sports
          </AddText>
          <MainText>{sportTime} min</MainText>
        </SportTime>
      </Daily>
      <Warnings>
        <SecondText>
          <Icon name="note" />
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </SecondText>
      </Warnings>
      <BtnLogout>
        <LogOutBtn />
      </BtnLogout>
    </User>
  );
}
