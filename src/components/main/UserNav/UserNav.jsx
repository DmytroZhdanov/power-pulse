import {
  Navigation,
  DiaryLink,
  ProductsLink,
  ExercisesLink,
} from './UserNav.styled';

export default function UserNav() {
  return (
    <Navigation>
      <DiaryLink to="/diary">Diary</DiaryLink>
      <ProductsLink to="/products">Products</ProductsLink>

      <ExercisesLink to="/exercises">Exercises</ExercisesLink>
    </Navigation>
  );
}
