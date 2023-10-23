import sprite from '../../../assets/images/sprite/sprite.svg';
import { ArrowBtn, DataBtnsContainer, GoBtn } from './DataBtns.styled';

const DataBtns = ({ stepValue, handleBack, handleNext }) => {
  return (
    <DataBtnsContainer>
      {stepValue === 3 && (
        <GoBtn type="submit" id="btn">
          Go
        </GoBtn>
      )}

      {stepValue !== 1 && (
        <ArrowBtn type="button" onClick={handleBack}>
          <svg style={{ transform: 'rotate(180deg)' }}>
            <use href={`${sprite}#big_arrow`} />
          </svg>
          Back
        </ArrowBtn>
      )}
      {stepValue !== 3 && (
        <ArrowBtn type="button" onClick={handleNext}>
          Next
          <svg>
            <use href={`${sprite}#big_arrow`} />
          </svg>
        </ArrowBtn>
      )}
    </DataBtnsContainer>
  );
};

export default DataBtns;
