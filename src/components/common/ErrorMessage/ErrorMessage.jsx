import PropTypes from 'prop-types';

import Icon from 'components/common/IconsComp/Icon';

import { ContainerDiv, ErrorIconDiv, MessageP } from './ErrorMessage.styled';

export default function ErrorMessage({ notificationType = 'Error:', message }) {
  return (
    <ContainerDiv>
      <ErrorIconDiv>
        <Icon name="exclamation-mark" />
      </ErrorIconDiv>

      <MessageP>
        {notificationType} {message}
      </MessageP>
    </ContainerDiv>
  );
}

ErrorMessage.propTypes = {
  notificationType: PropTypes.string,
  message: PropTypes.string.isRequired,
};
