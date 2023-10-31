import styled from '@emotion/styled';

export const ExercisesCardDiv = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grayDisabled};
  max-height: 163px;

  &:hover,
  &:focus,
  &:active {
    background-image: url(${props => props.gifUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    background-color: ${({ theme }) => theme.color.fullWhite};
  }
  &:hover p,
  &:hover span,
  &:hover h2 {
    color: ${({ theme }) => theme.color.black};
  }
  &:hover .start {
    color: ${({ theme }) => theme.color.orangeFirst};
    font-weight: 500;
  }
  &:hover h2 {
    max-width: 225px;
  }
  &:hover button {
  }
  &:hover span {
    font-weight: 500;
  }

  &:hover .target,
  &:hover .bodyPart {
    opacity: 0;
  }

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    &:hover h2 {
      max-width: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 405px;

    &:hover .bodyPart {
      opacity: 1;
    }
    &:hover h2 {
      max-width: 225px;
    }
  }
`;

export const ExercisesWrapDiv = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const SvgRunMan = styled.svg`
  max-width: 24px;
  max-height: 24px;
`;

export const SvgArrow = styled.svg`
  width: 16px;
  height: 16px;
`;

export const TitleP = styled.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.grayFourth};
  color: ${({ theme }) => theme.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`;

export const BoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`;

export const ExerciseNameh2 = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  &::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const ExerciseDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const ButtonStart = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 1px;
  @media screen and (min-width: 768px) {
    margin-right: 152px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 152px;
  }
`;

export const ButtonTitleP = styled.p`
  margin-right: 8px;
  color: ${({ theme }) => theme.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const CategoryP = styled.p`
  color: ${({ theme }) => theme.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 4px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 4px;
  }
`;

export const ValuesSpan = styled.span`
  padding-left: 0;
  display: inline-block;
  color: ${({ theme }) => theme.color.white};

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    margin-left: 4px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
