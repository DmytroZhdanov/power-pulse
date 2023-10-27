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
import { useFetchStatisticQuery } from '../../../redux/api';
import Loader from '../../Loader/Loader';
import { useEffect, useState } from 'react';
import BasicModalWindow from '../../common/BasicModalWindow/BasicModalWindow';
import TimerWarning from '../../common/TimerWarning/TimerWarning';
import { stepValueForm } from '../../../redux/dataPage/selectors';
import { useSelector } from 'react-redux';

export default function StatisticsInfo({ pathname, page }) {
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const { data, isFetching, isError } = useFetchStatisticQuery();
  const stepValue = useSelector(stepValueForm);
  console.log(stepValue);

  const path = pathname.split('');
  const keyword =
    page === '' ||
    page === ROUTER.SIGN_UP ||
    page === ROUTER.SIGN_IN ||
    page === stepValue
      ? 'main'
      : path[path.length - 1];

  useEffect(() => {
    let id;

    if (isFetching) {
      id = setTimeout(setShowTimerWarning, 5000, true);
    } else {
      setShowTimerWarning(false);
    }

    return clearTimeout(id);
  }, [isFetching]);

  const formatNumber = number => {
    if (number < 1000) {
      return number;
    } else {
      return `${Math.floor(number / 1000)}k+`;
    }
  };

  return (
    <>
      {isFetching && <Loader />}
      {isFetching && showTimerWarning && (
        <BasicModalWindow onClose={() => setShowTimerWarning(false)}>
          <TimerWarning />
        </BasicModalWindow>
      )}
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
                  {formatNumber(data.timeTotalQuantity)}
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
      </Background>
    </>
  );
}

StatisticsInfo.propTypes = {
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
