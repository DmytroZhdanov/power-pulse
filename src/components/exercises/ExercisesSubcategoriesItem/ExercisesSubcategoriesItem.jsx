import PropTypes from 'prop-types';
import {
  GalleryLi,
  ImageLink,
  WrapperDiv,
  DescriptionUl,
  MainTextP,
  SubtextP,
} from './ExercisesSubcategoriesItem.styled';

export default function ExercisesSubcategoriesItem({ item }) {
  return (
    <GalleryLi>
      <ImageLink to={item.name}>
        <WrapperDiv img={item.imgURL}>
          <DescriptionUl>
            <li>
              <MainTextP>{item.name}</MainTextP>
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
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
