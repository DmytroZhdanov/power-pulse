import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  padding: 32px 0 0 96px;

  
`;

export const DataContainer = styled.div`
  background-image: url(${({ bg }) => bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  transition: background-image 0.6s ease-in-out;
`;
