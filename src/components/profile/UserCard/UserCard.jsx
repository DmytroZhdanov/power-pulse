import { useState } from 'react';
import { useSelector } from 'react-redux';

import LogOutBtn from 'components/common/LogOutBtn/LogOutBtn';
import Icon from 'src/components/common/IconsComp/Icon';
import { selectUserAvatars } from 'src/redux/auth/selectors';
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
  const isAvatar = useSelector(selectUserAvatars);
  // const { name } = useSelector();
  const [avatar, setAvatar] = useState(isAvatar ? isAvatar : null);
  const [name, setName] = useState('Anna Rybachok');
  const [calories, setСalories] = useState(0);
  const [sportTime, setSportTime] = useState(0);

  const handleChange = () => {};

  return (
    <User>
      <Avatar>
        <Image>
          {isAvatar ? (
            <img src={avatar} alt="Your avatar" />
          ) : (
            <Icon name="user" />
          )}
          <BtnAvat type="button" onClick={handleChange}>
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
