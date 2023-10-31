import styled from '@emotion/styled';

export const LogoutTextP = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const SvgLogout = styled.svg`
  width: 20px;
  height: 20px;
`;
export const LogoutButton = styled.button`
  stroke: ${({ white, theme }) =>
    white ? theme.color.white : theme.color.orangeFirst};

  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: ${({ theme }) => theme.color.white};
  border: none;
  outline: none;
  cursor: pointer;
`;
