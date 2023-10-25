import styled from 'styled-components';

export const User = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: black;

  @media (min-width: 768px) {
    width: 440px;
    gap: 32px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 125px;

  @media (min-width: 768px) {
    width: 166px;
  }
`;

export const Image = styled.div`
  position: relative;
  margin: 0;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;

  div {
  }

  img {
    display: block;
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    font-size: 14px;
    color: rgba(239, 237, 232, 30%);
  }

  button {
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border-style: none;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;

    img {
    }
    button {
      width: 32px;
      height: 32px;
      bottom: -14px;
    }
  }
`;

export const BtnAvat = styled.button``;

export const MainText = styled.p`
  font-size: 18px;
  line-height: calc(20 / 18);
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;

export const SecondText = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: rgba(239, 237, 232, 30%);
`;

export const AddText = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #efede8cc;
  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${MainText} {
    text-align: center;
  }

  ${SecondText} {
    color: #efede880;
  }

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

export const Daily = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const Calories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 157px;
  padding: 14px 13px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);

  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    width: 214px;
    padding: 14px 18px;

    ${MainText} {
      line-height: calc(32 / 24);
    }
  }
`;

export const SportTime = styled(Calories)`
  width: 165px;
  @media (min-width: 768px) {
    width: 209px;
  }
`;

export const Warnings = styled.div`
  width: 100%;
  ${SecondText} {
    display: flex;
    color: rgba(239, 237, 232, 0.3);
  }

  svg {
    margin-right: 8px;
    max-width: 24px;
    max-height: 24px;
  }

  @media (min-width: 768px) {
    ${SecondText} {
      font-size: 16px;
      line-height: calc(24 / 16);
    }
  }
`;

export const BtnLogout = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
