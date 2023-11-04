import {
  AcceptBtn,
  AcceptDiv,
  AcceptTitleH2,
  AcceptBtnDiv,
} from './AvatarAccept.styled';

export default function AvatarAccept({ onAccept, onClose, file }) {
  const src = URL.createObjectURL(file);
  return (
    <>
      <AcceptTitleH2> Are you sure?</AcceptTitleH2>
      <AcceptDiv>
        {file && (
          <img src={src} alt="Your avatar" width="100%" loading="lazy" />
        )}
      </AcceptDiv>
      <AcceptBtnDiv>
        <AcceptBtn onClick={onAccept}>Yes</AcceptBtn>
        <AcceptBtn onClick={onClose}>No</AcceptBtn>
      </AcceptBtnDiv>
    </>
  );
}
