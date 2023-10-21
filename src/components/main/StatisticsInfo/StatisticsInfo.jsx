import PropTypes from 'prop-types';
import {
  Background,
  ColoredBlock,
  ColoredBlockIcon,
  ColoredBlockIconWrapper,
  ColoredBlockSpan,
  ColoredBlockText,
  DarkBlock,
  DarkBlockIcon,
  DarkBlockIconWrapper,
  DarkBlockSpan,
  DarkBlockText,
} from './StatisticsInfo.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { ROUTER } from 'src/utils/constants';

export default function StatisticsInfo({ pathname, page }) {
  const path = pathname.split('');
  const keyword =
    page === '' || page === ROUTER.SIGN_UP || page === ROUTER.SIGN_IN
      ? 'main'
      : path[path.length - 1];

  return (
    <Background keyword={keyword}>
      <DarkBlock dark={true}>
        <DarkBlockIconWrapper>
          <DarkBlockIcon>
            <use href={`${sprite}#play`} />
          </DarkBlockIcon>
        </DarkBlockIconWrapper>

        <div>
          <DarkBlockSpan>350+</DarkBlockSpan>

          <DarkBlockText>Video tutorial</DarkBlockText>
        </div>
      </DarkBlock>

      <ColoredBlock>
        <div>
          <ColoredBlockIconWrapper>
            <ColoredBlockIcon>
              <use href={`${sprite}#running`} />
            </ColoredBlockIcon>
          </ColoredBlockIconWrapper>

          <ColoredBlockSpan>500</ColoredBlockSpan>
        </div>

        <ColoredBlockText>cal</ColoredBlockText>
      </ColoredBlock>
    </Background>
  );
}

StatisticsInfo.propTypes = {
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
