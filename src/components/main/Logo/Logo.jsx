import PropTypes from 'prop-types';

import { LogoLink, SvgIcon, TitleP } from './Logo.styles';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function Logo({ isLogged }) {
  return (
    <LogoLink to="/">
      <SvgIcon>
        <use href={`${sprite}#logo`}></use>
      </SvgIcon>

      <TitleP isLogged={isLogged}>PowerPulse</TitleP>
    </LogoLink>
  );
}

Logo.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
