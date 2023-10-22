import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { List } from './ExercisesSubcategoriesList.styled';
export default function ExercisesSubcategoriesList({ body }) {
  return (
    <List>
      {body.map(bod => (
        <ExercisesSubcategoriesItem key={bod._id} bod={bod} />
      ))}
    </List>
  );
}
