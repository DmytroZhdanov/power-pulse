import { useEffect } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { EXERCISES_CATEGORY } from '../../../utils/constants';
import {
  ListCategories,
  ItemCategory,
  LabelCategory,
  InputCategory,
} from './ExercisesCategories.styled';
export default function ExercisesCategories({ category, setCategory }) {
  const path = useResolvedPath();
  const navigate = useNavigate();

  useEffect(() => {
    if (path.pathname !== '/exercises') {
      navigate('./'); //для того чтобы убрать динамический путь в строке запроса (путь)
    }
  }, [category]);

  const handleOptionChange = event => {
    setCategory(event.target.value);
  };

  return (
    <ListCategories>
      <ItemCategory>
        <LabelCategory selected={category === EXERCISES_CATEGORY.BODY_PARTS}>
          <InputCategory
            type="radio"
            value={EXERCISES_CATEGORY.BODY_PARTS}
            checked={category === EXERCISES_CATEGORY.BODY_PARTS}
            onChange={handleOptionChange}
          />
          Body parts
        </LabelCategory>
      </ItemCategory>
      <ItemCategory>
        <LabelCategory selected={category === EXERCISES_CATEGORY.MUSCLES}>
          <InputCategory
            type="radio"
            value={EXERCISES_CATEGORY.MUSCLES}
            checked={category === EXERCISES_CATEGORY.MUSCLES}
            onChange={handleOptionChange}
          />
          Muscles
        </LabelCategory>
      </ItemCategory>
      <ItemCategory>
        <LabelCategory selected={category === EXERCISES_CATEGORY.EQUIPMENT}>
          <InputCategory
            type="radio"
            value={EXERCISES_CATEGORY.EQUIPMENT}
            checked={category === EXERCISES_CATEGORY.EQUIPMENT}
            onChange={handleOptionChange}
          />
          Equipment
        </LabelCategory>
      </ItemCategory>
    </ListCategories>
  );
}
