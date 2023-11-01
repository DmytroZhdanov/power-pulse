import styled from '@emotion/styled';
import { bg_eating, bg_eating2x, bg_eating3x } from 'src/utils/background';

export const BackgroundDiv = styled.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;

  background-image: image-set(
    url(${bg_eating}) 1x,
    url(${bg_eating2x}) 2x,
    url(${bg_eating3x}) 3x
  );
  background-size: 428px 716px;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
