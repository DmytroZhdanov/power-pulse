import PropTypes from 'prop-types';

import {
  BackgroundDiv,
  ColoredBlockDiv,
  ColoredBlockIconSvg,
  ColoredBlockIconWrapperDiv,
  ColoredBlockSpanP,
  ColoredBlockTextP,
  DarkBlockDiv,
  DarkBlockIconSvg,
  DarkBlockIconWrapperDiv,
  DarkBlockSpanP,
  DarkBlockTextP,
} from './StatisticsInfo.styled';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';

import sprite from 'src/assets/images/sprite/sprite.svg';
import { ROUTER } from 'src/utils/constants';
import { useFetchStatisticQuery } from 'src/redux/api';

export default function StatisticsInfo({ pathname, page }) {
  const { data, isFetching, isError, error } = useFetchStatisticQuery();

  // Determine keyword to display proper background image
  const path = pathname.split('/');
  const keyword =
    page === ROUTER.WELCOME ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN
      ? 'main'
      : path[path.length - 1];

  /**
   * Check if passed number more than 1000.
   * If yes, change format of displaying the number.
   *
   * @param {Number} number number to be formatted
   * @returns Number || String
   */
  const formatNumber = number => {
    if (number < 1000) {
      return number;
    } else {
      return `${Math.floor(number / 1000)}k+`;
    }
  };

  return (
    <BackgroundDiv keyword={keyword} isError={isError}>
      {data && (
        <>
          <DarkBlockDiv>
            <DarkBlockIconWrapperDiv>
              <DarkBlockIconSvg>
                <use href={`${sprite}#play`} />
              </DarkBlockIconSvg>
            </DarkBlockIconWrapperDiv>

            <div>
              <DarkBlockSpanP>{data.exerciseTotalQuantity}</DarkBlockSpanP>

              <DarkBlockTextP>Video tutorial</DarkBlockTextP>
            </div>
          </DarkBlockDiv>

          <ColoredBlockDiv>
            <div>
              <ColoredBlockIconWrapperDiv>
                <ColoredBlockIconSvg>
                  <use href={`${sprite}#running`} />
                </ColoredBlockIconSvg>
              </ColoredBlockIconWrapperDiv>

              <ColoredBlockSpanP>
                {formatNumber(data.caloriesTotalQuantity)}
              </ColoredBlockSpanP>
            </div>

            <ColoredBlockTextP>cal</ColoredBlockTextP>
          </ColoredBlockDiv>

          <DarkBlockDiv>
            <DarkBlockIconWrapperDiv>
              <DarkBlockIconSvg>
                <use href={`${sprite}#play`} />
              </DarkBlockIconSvg>
            </DarkBlockIconWrapperDiv>

            <div>
              <DarkBlockSpanP>
                {formatNumber(data.usersTotalQuantity)}
              </DarkBlockSpanP>

              <DarkBlockTextP>Users</DarkBlockTextP>
            </div>
          </DarkBlockDiv>

          <ColoredBlockDiv>
            <div>
              <ColoredBlockIconWrapperDiv>
                <ColoredBlockIconSvg>
                  <use href={`${sprite}#running`} />
                </ColoredBlockIconSvg>
              </ColoredBlockIconWrapperDiv>

              <ColoredBlockSpanP>
                {formatNumber(data.minutesTotalQuantity)}
              </ColoredBlockSpanP>
            </div>

            <ColoredBlockTextP>minutes</ColoredBlockTextP>
          </ColoredBlockDiv>

          <DarkBlockDiv>
            <DarkBlockIconWrapperDiv>
              <DarkBlockIconSvg>
                <use href={`${sprite}#play`} />
              </DarkBlockIconSvg>
            </DarkBlockIconWrapperDiv>

            <div>
              <DarkBlockSpanP>
                {formatNumber(data.exerciseDoneTotalQuantity)}
              </DarkBlockSpanP>

              <DarkBlockTextP>Exercises performed</DarkBlockTextP>
            </div>
          </DarkBlockDiv>
        </>
      )}
      {isError && (
        <>
          <DarkBlockDiv isError={isError}>
            <DarkBlockIconWrapperDiv>
              <DarkBlockIconSvg>
                <use href={`${sprite}#play`} />
              </DarkBlockIconSvg>
            </DarkBlockIconWrapperDiv>

            <div>
              <DarkBlockSpanP>350+</DarkBlockSpanP>

              <DarkBlockTextP>Video tutorial</DarkBlockTextP>
            </div>
          </DarkBlockDiv>

          <ColoredBlockDiv isError={isError}>
            <div>
              <ColoredBlockIconWrapperDiv>
                <ColoredBlockIconSvg>
                  <use href={`${sprite}#running`} />
                </ColoredBlockIconSvg>
              </ColoredBlockIconWrapperDiv>

              <ColoredBlockSpanP>500</ColoredBlockSpanP>
            </div>

            <ColoredBlockTextP>cal</ColoredBlockTextP>
          </ColoredBlockDiv>
        </>
      )}
      <ErrorHandler isLoading={isFetching} isError={isError} error={error} />
    </BackgroundDiv>
  );
}

StatisticsInfo.propTypes = {
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
