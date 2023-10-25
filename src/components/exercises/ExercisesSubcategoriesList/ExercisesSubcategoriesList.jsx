import ExercisesSubcategoriesItem from 'components/exercises/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export function ExercisesSubcategoriesList() {
  return (
    <List>
      {body.map(bod => (
        <ExercisesSubcategoriesItem key={bod._id} bod={bod} />
      ))}
    </List>
  );
}
