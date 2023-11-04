import { useTranslation } from 'react-i18next';
import { PageLink, Navigation } from './UserNav.styled';

export default function UserNav(props) {
  const { t } = useTranslation(['Header']);
  const headerNav = t(`nav`, { ns: 'Header', returnObjects: true });

  return (
    <Navigation>
      {headerNav.map(({ name, href }) => {
        return (
          <PageLink key={name + href} {...props} to={`/${href}`}>
            {name}
          </PageLink>
        );
      })}
    </Navigation>
  );
}
