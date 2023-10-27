import styled from '@emotion/styled';

const Block = styled.div`
  display: inline-block;
  padding: 14px 18px;
  border-radius: 12px;
  font-weight: 700;
`;

const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const DarkBlock = styled(Block)`
  background-color: #303030;
`;

export const DarkBlockIcon = styled(Icon)`
  /* fill: #000; */
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const DarkBlockText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
`;

export const DarkBlockSpan = styled.p`
  font-size: 16px;
  line-height: calc(18 / 16);
`;

export const ColoredBlock = styled(Block)`
  padding-right: 37px;
  background-color: #ef8964;
  padding: 14px 44px 14px 28px;
  position: absolute;
  bottom: 171px;
  right: 32px;
  div {
    display: flex;
    gap: 11px;
    align-items: end;
  }
`;

export const ColoredBlockIcon = styled(Icon)`
  fill: #ffffff;
  width: 20px;
  height: 20px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ColoredBlockText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const ColoredBlockSpan = styled.p`
  font-size: 48px;
  line-height: calc(50 / 48);
  letter-spacing: -1px;
`;
