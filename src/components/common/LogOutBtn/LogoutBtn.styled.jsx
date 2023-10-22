import styled from '@emotion/styled';

export const LogoutText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const SvgLogout = styled.svg`
  width: 20px;
  height: 20px;
`;
export const LogoutButton = styled.button`
  stroke: ${props => (props.white ? '#efede8' : '#e6533c')};

  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: #efede8;
  border: none;
  outline: none;
  cursor: pointer;
`;
