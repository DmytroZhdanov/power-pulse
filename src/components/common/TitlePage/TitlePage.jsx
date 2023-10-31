import PropTypes from 'prop-types';

import { TitleH1 } from './TitlePage.styled';

export default function TitlePage({ text }) {
  return <TitleH1>{text}</TitleH1>;
}

TitlePage.propTypes = {
  text: PropTypes.string,
};
