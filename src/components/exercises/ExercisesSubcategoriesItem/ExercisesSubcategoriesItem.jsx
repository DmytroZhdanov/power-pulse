import {
  Item,
  LinkImage,
  Wrapp,
  Text,
  Maintext,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem({ it }) {
  function upperCase(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }

  return (
    <Item>
      <LinkImage to={it.name}>
        <Wrapp img={it.imgURL}>
          <Text>
            <Maintext>{upperCase(it.name)}</Maintext>
            <Subtext>{it.filter}</Subtext>
          </Text>
        </Wrapp>
      </LinkImage>
    </Item>
  );
}
