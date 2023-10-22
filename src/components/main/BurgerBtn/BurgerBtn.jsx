import sprite from 'src/assets/images/sprite/sprite.svg';
import { BurgerButton, BurgerSvg } from './BurgerBtn.styled';
export default function BurgerBtn({ setOpenedModal }) {
  return (
    <BurgerButton
      onClick={() => {
        setOpenedModal(true);
      }}
    >
      <BurgerSvg>
        <use href={`${sprite}#menu`}></use>
      </BurgerSvg>
    </BurgerButton>
  );
}
