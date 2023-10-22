import {
  Item,
  Wrapp,
  WrappOverlay,
  Image,
  Text,
  Maintext,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';
export default function ExercisesSubcategoriesItem({ bod }) {
  function UpperCase(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }
  return (
    <Item>
      <Wrapp>
        <Image src={bod.imgURL} alt={bod.name} />
        <WrappOverlay></WrappOverlay>
        <Text>
          <Maintext>{UpperCase(bod.name)}</Maintext>
          <Subtext>{bod.filter}</Subtext>
        </Text>
      </Wrapp>
    </Item>
  );
}
