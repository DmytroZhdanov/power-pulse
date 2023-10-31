import styled from '@emotion/styled';

export const WrapperTitleCategoriesDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 72px;
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${props => props.margin && '32px'};
    margin-top: ${props => props.margin && '72px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-top: 72px;
    margin-bottom: 64px;
    margin-bottom: ${props => props.margin && '32px'};
  }
`;

export const ContentDiv = styled.div`
  position: relative;
`;
