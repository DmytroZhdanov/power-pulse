import PropTypes from 'prop-types';

import { Title } from './TitlePage.styled';

export default function TitlePage({ text }) {
  return <Title>{text}</Title>;
}

TitlePage.propTypes = {
  text: PropTypes.string,
};
