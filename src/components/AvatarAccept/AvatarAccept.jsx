import {
  AcceptBtn,
  AcceptDiv,
  AcceptTitleH2,
  AcceptBtnDiv,
} from './AvatarAccept.styled';
import PropTypes from 'prop-types';

export default function AvatarAccept({ onAccept, onClose, file }) {
  const src = URL.createObjectURL(file);
  return (
    <>
      <AcceptTitleH2> Are you sure?</AcceptTitleH2>
      <AcceptDiv>
        {file && <img src={src} alt="Your avatar" loading="lazy" />}
      </AcceptDiv>
      <AcceptBtnDiv>
        <AcceptBtn onClick={onAccept}>Yes</AcceptBtn>
        <AcceptBtn onClick={onClose}>No</AcceptBtn>
      </AcceptBtnDiv>
    </>
  );
}

AvatarAccept.propTypes = {
  onClose: PropTypes.func.isRequired,
  file: PropTypes.instanceOf(File).isRequired,
  onAccept: PropTypes.func.isRequired,
};
