import { useLocation, useRouteError } from 'react-router-dom';
import { useRef } from 'react';
import { ROUTER } from 'src/utils/constants';
import Header from 'components/main/Header/Header';
import {
  BackgroundImage,
  BackgroundImageWrap,
  ContentWrap,
  Flex,
  LinkStyled,
  Text,
  Title,
} from './Error.styled';

export default function Error() {
  const error = useRouteError();
  console.log(error);
  const location = useLocation();

  const goBackLink = useRef(location?.state?.from ?? ROUTER.MAIN);

  return (
    <>
      <Header />
      <main>
        <Flex>
          <ContentWrap>
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
