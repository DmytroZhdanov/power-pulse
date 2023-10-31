import PropTypes from 'prop-types';
import Icons from 'src/assets/images/sprite/sprite.svg';

export default function Icon({ name }) {
  return (
    <svg>
      <use href={Icons + '#' + name}></use>
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

/// EXAMPLE---
// <Icon name="logo" />
//
