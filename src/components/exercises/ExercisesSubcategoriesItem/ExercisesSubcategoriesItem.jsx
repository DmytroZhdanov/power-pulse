import PropTypes from 'prop-types';
import {
  GalleryLi,
  ImageLink,
  WrapperDiv,
  DescriptionUl,
  MaintextP,
  SubtextP,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem({ item }) {
  //function to make first letter into upperCase
  function upperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <GalleryLi>
      <ImageLink to={item.name}>
        <WrapperDiv img={item.imgURL}>
          <DescriptionUl>
            <li>
              <MaintextP>{upperCase(item.name)}</MaintextP>
            </li>
            <li>
              <SubtextP>{item.filter}</SubtextP>
            </li>
          </DescriptionUl>
        </WrapperDiv>
      </ImageLink>
    </GalleryLi>
  );
}

ExercisesSubcategoriesItem.propTypes = {
  ExercisesSubcategoriesItem: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgURL: PropTypes.string.isRequired,
      filter: PropTypes.string.isRequired,
    }),
  ),
};
