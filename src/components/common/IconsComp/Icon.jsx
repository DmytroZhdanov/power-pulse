import Icons from '../../../assets/images/sprite/sprite.svg';

export default function Icon({ name }) {
  return (
    <svg>
      <use href={Icons + '#' + name}></use>
    </svg>
  );
}

/// EXAMPLE---
// <Icon name="logo" />
//
