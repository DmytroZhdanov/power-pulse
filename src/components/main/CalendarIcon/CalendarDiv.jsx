import { CalendarLink, SvgIcon } from './CalendarDiv.styles';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function CalendarDiv() {
  return (
    <CalendarLink to="/calendar">
      <SvgIcon>
        <use href={`${sprite}#icon-calendar`}></use>
      </SvgIcon>
    </CalendarLink>
  );
}
