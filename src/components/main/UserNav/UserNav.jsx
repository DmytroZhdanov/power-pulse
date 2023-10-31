import { PageLink, Navigation } from './UserNav.styled';

export default function UserNav(props) {
  return (
    <Navigation>
      <PageLink {...props} to="/diary">
        Diary
      </PageLink>

      <PageLink {...props} to="/products">
        Products
      </PageLink>

      <PageLink {...props} to="/exercises">
        Exercises
      </PageLink>
    </Navigation>
  );
}
