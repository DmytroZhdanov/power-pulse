import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { ROUTER } from 'src/utils/constants';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  BackgroundImage,
  BackgroundImageWrap,
  ContentWrap,
  Flex,
  LinkStyled,
  LogoLink,
  LogoWrap,
  SvgIcon,
  Text,
  Title,
  TitleLogo,
} from './Error.styled';

export default function Error() {
  const location = useLocation();

  const goBackLink = useRef(location?.state?.from ?? ROUTER.MAIN);

  return (
    <>
      <main>
        <Flex>
          <ContentWrap>
            <LogoWrap>
              <LogoLink to={ROUTER.MAIN}>
                <SvgIcon width="44" height="17">
                  <use href={`${sprite}#logo-error`}></use>
                </SvgIcon>
                <TitleLogo>PowerPulse</TitleLogo>
              </LogoLink>
            </LogoWrap>
            <Title>404</Title>
            <Text>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </Text>
            <LinkStyled to={goBackLink.current}>Go Home</LinkStyled>
          </ContentWrap>
          <BackgroundImageWrap>
            <BackgroundImage />
          </BackgroundImageWrap>
        </Flex>
      </main>
    </>
  );
}
