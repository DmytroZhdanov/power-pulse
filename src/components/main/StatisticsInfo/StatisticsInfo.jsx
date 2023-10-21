import {
  ColoredBlock,
  ColoredBlockSpan,
  ColoredBlockText,
  DarkBlock,
  DarkBlockSpan,
  DarkBlockText,
} from './StatisticsInfo.styled';
import sprite from 'src/assets/images/sprite';

export default function StatisticsInfo() {
  return (
    <>
      <DarkBlock dark={true}>
        <svg>
          <use href={`${sprite}#play`} />
        </svg>
        <DarkBlockSpan>350+</DarkBlockSpan>
        <DarkBlockText>Video tutorial</DarkBlockText>
      </DarkBlock>

      <ColoredBlock>
        <svg>
          <use href={`${sprite}#running`} />
        </svg>
        <ColoredBlockSpan>500</ColoredBlockSpan>
        <ColoredBlockText>cal</ColoredBlockText>
      </ColoredBlock>
    </>
  );
}
