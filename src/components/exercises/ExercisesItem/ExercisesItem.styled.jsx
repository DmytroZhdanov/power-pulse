import styled from '@emotion/styled';

export const ExercisesCard = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  max-height: 163px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    &:hover {
      background-image: url(${props => props.gifUrl});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      background-color: #ffffff;
    }
    &:hover p,
    &:hover span,
    &:hover h2 {
      color: black;
    }

    &:hover h2 {
      max-width: 225px;
    }
    &:hover button {
      margin-right: 152px;
    }

    &:hover .target {
      opacity: 0;
    }
    &:hover .start {
      color: #e6533c;
      font-weight: 500;
    }
  }
`;

export const ExercisesWrap = styled.div`
  display: flex;
  justify-content: space-between;
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

export const Title = styled.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  color: '#fff';
  font-size: 12px;
  font-weight: 700;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 16px;
  flex-wrap: wrap;
`;
export const ExerciseName = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

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
`;
export const ButtonTitle = styled.p`
  margin-right: 8px;
  color: #e6533c;
  font-size: 14px;
  line-height: calc(18 / 14);
`;
export const Category = styled.p`
  color: rgba(239, 237, 232, 0.4);
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

export const Values = styled.span`
  padding-left: 0;
  color: #efede8;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) and (max-width: 1440px) {
    margin-left: 4px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
