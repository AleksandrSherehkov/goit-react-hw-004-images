import { ProgressBar } from 'react-loader-spinner';
import { Flex } from './Loader.styled';

export const Loader = () => {
  return (
    <Flex>
      <ProgressBar
        height="120"
        width="120"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </Flex>
  );
};
