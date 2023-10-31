import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 335px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: 224px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 237px;
  }
`;

export const ImageLink = styled(Link)`
  width: 100%;
`;

export const WrapperDiv = styled.div`
  position: relative;
  height: 206px;

  background-color: rgba(4, 4, 4, 0.5);
  background:
    linear-gradient(0deg, rgba(4, 4, 4, 0.5) 0%, rgba(4, 4, 4, 0.5) 100%),
    url(${props => props.img}) center center no-repeat;

  background-size: cover;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.greyDisabled};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DescriptionUl = styled.ul`
  color: white;
  text-align: center;
  z-index: 2;
`;

export const MainTextP = styled.p`
  font-size: 20px;
  line-height: 1.33;
  margin-bottom: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 24px;
  }
`;

export const SubtextP = styled.p`
  color: ${({ theme }) => theme.color.greyThird};
  font-size: 12px;
  line-height: 1.5;
`;
