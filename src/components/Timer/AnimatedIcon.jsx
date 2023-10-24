import PropTypes from 'prop-types';

import { Icon, IconWrapper } from './AnimatedIcon.styled';

const AnimatedIcon = ({ isRunning, animationDuration }) => {
  return (
    <IconWrapper
      animationDuration={animationDuration}
      style={{ animationPlayState: isRunning ? '' : 'paused' }}
    >
      <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 7">
        <circle
          cx="3.5"
          cy="3.5"
          r="3.1"
          fill="#E6533C"
          stroke="#EF8964"
          strokeWidth=".8"
        />
      </Icon>
    </IconWrapper>
  );
};
export default AnimatedIcon;

AnimatedIcon.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  animationDuration: PropTypes.number.isRequired,
};
