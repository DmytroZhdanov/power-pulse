import {
  ColoredBlock,
  ColoredBlockIcon,
  ColoredBlockSpan,
  ColoredBlockText,
  DarkBlock,
  DarkBlockIcon,
  DarkBlockSpan,
  DarkBlockText,
} from './DataStatisticsInfo.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export function DataInfoOrange({ stepValue }) {
  return (
    <>
      {/* <DarkBlock dark={true}>
        <DarkBlockIcon>
          <use href={`${sprite}#play`} />
        </DarkBlockIcon>
        <DarkBlockSpan>350+</DarkBlockSpan>
        <DarkBlockText>Video tutorial</DarkBlockText>
      </DarkBlock> */}

      <ColoredBlock>
        <ColoredBlockIcon>
          {stepValue === 1 && <use href={`${sprite}#running`} />}
          {stepValue === 2 && <use href={`${sprite}#watch`} />}
          {stepValue === 3 && <use href={`${sprite}#running`} />}
        </ColoredBlockIcon>
        <div>
          <ColoredBlockSpan>
            {stepValue === 1 && '100'}
            {stepValue === 2 && '24'}
            {stepValue === 3 && '300'}
          </ColoredBlockSpan>
          <ColoredBlockText>
            {stepValue === 1 && 'users'}
            {stepValue === 2 && 'hours'}
            {stepValue === 3 && 'ex'}
          </ColoredBlockText>
        </div>
      </ColoredBlock>
    </>
  );
}
