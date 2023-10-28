import styled from '@emotion/styled';

export const DataContainer = styled.div`
  /* width: 674px; */
  /* height: 100vh; */
  /* padding-left: 96px; */
  /* margin-bottom: 204px; */

  h2 {
    color: ${({ theme }) => theme.color.white};

    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  h6 {
    color: ${({ theme }) => theme.color.grayFirst};

    font-size: 16px;
  }
`;
