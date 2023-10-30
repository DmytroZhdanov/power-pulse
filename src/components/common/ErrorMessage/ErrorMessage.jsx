import Icon from 'components/common/IconsComp/Icon';

import { Container, ErrorIcon, Message } from './ErrorMessage.styled';

export default function ErrorMessage({ notificationType='Error:', message }) {
  return (
    <Container>
      <ErrorIcon>
        <Icon name="exclamation-mark" />
      </ErrorIcon>
      <Message>{notificationType} {message}</Message>
    </Container>
  );
}
