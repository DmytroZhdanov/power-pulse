import styled from '@emotion/styled';

export const GoBtn = styled.button`
  padding: 16px 75px;
  text-align: center;
  font-size: 20px;
  color: rgba(239, 237, 232, 0.6);
  background-color: #e6533c;
  border-radius: 12px;
  border: none;

  transition: color 300ms ease-in-out;
  :hover {
    color: #efede8;
    transform: translateY(-1px);
  }
`;
export const DataBtnsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 84px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const ArrowBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 2px 0;
  border: none;
  color: rgba(239, 237, 232, 0.6);
  background-color: transparent;
  font-size: 16px;
  transition: color 300ms ease-in-out;
  :hover {
    color: #efede8;
    transform: translateY(-1px);
  }
`;
