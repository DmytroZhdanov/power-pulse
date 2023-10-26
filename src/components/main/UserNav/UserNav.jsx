import {
  Navigation,
  DiaryLink,
  ProductsLink,
  ExercisesLink,
} from './UserNav.styled';

export default function UserNav() {
  return (
    <Navigation>
      <DiaryLink {...props} to="/diary">
        Diary
      </DiaryLink>
      <ProductsLink {...props} to="/products">
        Products
      </ProductsLink>

      <ExercisesLink {...props} to="/exercises">
        Exercises
      </ExercisesLink>
    </Navigation>
  );
}
