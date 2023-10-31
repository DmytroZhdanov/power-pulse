import { LogoLink, SvgIcon, TitleP } from './Logo.styles';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function Logo() {
  return (
    <LogoLink to="/">
      <SvgIcon>
        <use href={`${sprite}#logo`}></use>
      </SvgIcon>

      <TitleP>PowerPulse</TitleP>
    </LogoLink>
  );
}
