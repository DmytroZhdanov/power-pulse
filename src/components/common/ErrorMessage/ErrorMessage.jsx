import Icon from 'components/common/IconsComp/Icon';

import { Container, ErrorIcon, Message } from './ErrorMessage.styled';

export default function ErrorMessage({ message }) {
  return (
    <Container>
      <ErrorIcon>
        <Icon name="exclamation-mark" />
      </ErrorIcon>
      <Message>Error: {message}</Message>
    </Container>
  );
}
