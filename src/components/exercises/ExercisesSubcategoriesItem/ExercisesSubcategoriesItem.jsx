import { Link } from 'react-router-dom';
import {
  Item,
  Wrapp,
  WrappOverlay,
  Image,
  Text,
  Maintext,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';
export default function ExercisesSubcategoriesItem({ name, imgURL, filter }) {
  function UpperCase(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }
  return (
    <Item>
      <Link to={name}>
        <Wrapp>
          <Image src={imgURL} alt={name} />
          <WrappOverlay></WrappOverlay>
          <Text>
            <Maintext>{UpperCase(name)}</Maintext>
            <Subtext>{filter}</Subtext>
          </Text>
        </Wrapp>
      </Link>
    </Item>
  );
}
