import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

export const Wrapp = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const WrappOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.5);
`;

export const Image = styled.img`
  width: 237px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
`;

export const Text = styled.div`
  position: absolute;
`;

export const Maintext = styled.p`
  font-size: 24px;
  line-height: 1.33;
`;

export const Subtext = styled.p`
  color: rgba(239, 237, 232, 0.4);

  font-size: 12px;

  line-height: 1.5;
`;
