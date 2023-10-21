import {
  ColoredBlock,
  ColoredBlockIcon,
  ColoredBlockSpan,
  ColoredBlockText,
  DarkBlock,
  DarkBlockIcon,
  DarkBlockSpan,
  DarkBlockText,
} from './StatisticsInfo.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function StatisticsInfo() {
  return (
    <>
      <DarkBlock dark={true}>
        <DarkBlockIcon>
          <use href={`${sprite}#play`} />
        </DarkBlockIcon>
        <DarkBlockSpan>350+</DarkBlockSpan>
        <DarkBlockText>Video tutorial</DarkBlockText>
      </DarkBlock>

      <ColoredBlock>
        <ColoredBlockIcon>
          <use href={`${sprite}#running`} />
        </ColoredBlockIcon>
        <ColoredBlockSpan>500</ColoredBlockSpan>
        <ColoredBlockText>cal</ColoredBlockText>
      </ColoredBlock>
    </>
  );
}
