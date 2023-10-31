import { ThreeDots } from 'react-loader-spinner';
import { WrapThreeDotsDiv } from './Loader.styled';

export default function Loader() {
  return (
    <WrapThreeDotsDiv>
      <ThreeDots
        height="90"
        width="90"
        radius="9"
        color="#E6533C"
        ariaLabel="three-dots-loading"
        visible={true}
        timeout={2000}
      />
    </WrapThreeDotsDiv>
  );
}
