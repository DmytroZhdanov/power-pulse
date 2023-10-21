import { LogoLink, SvgIcon, Title } from './Logo.styles';
import sprite from '../../../assets/images/sprite/sprite.svg';
export default function Logo() {
  return (
    <LogoLink to="/">
      <SvgIcon>
        <use href={`${sprite}#logo`}></use>
      </SvgIcon>
      <Title>PowerPulse</Title>
    </LogoLink>
  );
}
