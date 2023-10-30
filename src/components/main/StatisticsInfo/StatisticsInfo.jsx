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
import { useFetchStatisticQuery } from 'src/redux/api';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';

export default function StatisticsInfo({ pathname, page }) {
  const { data, isFetching, isError, error } = useFetchStatisticQuery();

  const path = pathname.split('/');
  const keyword =
    page === ROUTER.WELCOME ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN
      ? 'main'
      : path[path.length - 1];

  const formatNumber = number => {
    if (number < 1000) {
      return number;
    } else {
      return `${Math.floor(number / 1000)}k+`;
    }
  };

  return (
    <Background keyword={keyword} isError={isError}>
      {data && (
        <>
          <DarkBlock>
            <DarkBlockIconWrapper>
              <DarkBlockIcon>
                <use href={`${sprite}#play`} />
              </DarkBlockIcon>
            </DarkBlockIconWrapper>

            <div>
              <DarkBlockSpan>{data.exerciseTotalQuantity}</DarkBlockSpan>

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

              <ColoredBlockSpan>
                {formatNumber(data.caloriesTotalQuantity)}
              </ColoredBlockSpan>
            </div>

            <ColoredBlockText>cal</ColoredBlockText>
          </ColoredBlock>

          <DarkBlock>
            <DarkBlockIconWrapper>
              <DarkBlockIcon>
                <use href={`${sprite}#play`} />
              </DarkBlockIcon>
            </DarkBlockIconWrapper>

            <div>
              <DarkBlockSpan>
                {formatNumber(data.usersTotalQuantity)}
              </DarkBlockSpan>

              <DarkBlockText>Users</DarkBlockText>
            </div>
          </DarkBlock>

          <ColoredBlock>
            <div>
              <ColoredBlockIconWrapper>
                <ColoredBlockIcon>
                  <use href={`${sprite}#running`} />
                </ColoredBlockIcon>
              </ColoredBlockIconWrapper>

              <ColoredBlockSpan>
                {formatNumber(data.minutesTotalQuantity)}
              </ColoredBlockSpan>
            </div>

            <ColoredBlockText>minutes</ColoredBlockText>
          </ColoredBlock>

          <DarkBlock>
            <DarkBlockIconWrapper>
              <DarkBlockIcon>
                <use href={`${sprite}#play`} />
              </DarkBlockIcon>
            </DarkBlockIconWrapper>

            <div>
              <DarkBlockSpan>
                {formatNumber(data.exerciseDoneTotalQuantity)}
              </DarkBlockSpan>

              <DarkBlockText>Exercises performed</DarkBlockText>
            </div>
          </DarkBlock>
        </>
      )}
      {isError && (
        <>
          <DarkBlock isError={isError}>
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

          <ColoredBlock isError={isError}>
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
        </>
      )}
      <ErrorHandler isLoading={isFetching} isError={isError} error={error} />
    </Background>
  );
}

StatisticsInfo.propTypes = {
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
