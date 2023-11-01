import PropTypes from 'prop-types';

import { BurgerButton, BurgerSvg } from './BurgerBtn.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function BurgerBtn({ setOpenedModal }) {
  return (
    <BurgerButton aria-label="Burger Button"
      onClick={() => {
        setOpenedModal(true);
      }}
    >
      <BurgerSvg>
        <use href={`${sprite}#menu`} />
      </BurgerSvg>
    </BurgerButton>
  );
}

BurgerBtn.propTypes = {
  setOpenedModal: PropTypes.func.isRequired,
};
