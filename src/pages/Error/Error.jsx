import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import {
  BackgroundImageDiv,
  BackgroundImageWrapDiv,
  ContentWrapDiv,
  FlexDiv,
  LinkStyled,
  LogoLink,
  LogoWrapDiv,
  SvgIcon,
  TextP,
  TitleH1,
  TitleLogoP,
} from './Error.styled';

import { ROUTER } from 'src/utils/constants';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function Error() {
  const location = useLocation();

  const goBackLink = useRef(location?.state?.from ?? ROUTER.MAIN);

  return (
    <>
      <main>
        <FlexDiv>
          <ContentWrapDiv>
            <LogoWrapDiv>
              <LogoLink to={ROUTER.MAIN}>
                <SvgIcon width="44" height="17">
                  <use href={`${sprite}#logo-error`}></use>
                </SvgIcon>

                <TitleLogoP>PowerPulse</TitleLogoP>
              </LogoLink>
            </LogoWrapDiv>

            <TitleH1>404</TitleH1>

            <TextP>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </TextP>

            <LinkStyled to={goBackLink.current}>Go Home</LinkStyled>
          </ContentWrapDiv>

          <BackgroundImageWrapDiv>
            <BackgroundImageDiv />
          </BackgroundImageWrapDiv>
        </FlexDiv>
      </main>
    </>
  );
}
