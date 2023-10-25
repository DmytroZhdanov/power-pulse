import {
  Item,
  Wrapp,
  WrappOverlay,
  Image,
  Text,
  Maintext,
  Subtext,
} from './ExercisesSubcategoriesItem.styled';
export default function ExercisesSubcategoriesItem({ it }) {
  function UpperCase(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }
  return (
    <></>
    // <Item>
    //   <Wrapp>
    //     <Image src={it.imgURL} alt={it.name} />
    //     <WrappOverlay></WrappOverlay>
    //     <Text>
    //       <Maintext>{UpperCase(it.name)}</Maintext>
    //       <Subtext>{it.filter}</Subtext>
    //     </Text>
    //   </Wrapp>
    // </Item>
  );
}
