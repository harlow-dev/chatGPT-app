import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <>
      <Heading color='white' marginBottom='1rem'>
        <Image src={logo} width={100} display='block' margin='auto' marginBottom='1rem'/>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Paste in your text below and we'll extract the keywords for you.
      </Text>
    </>
  );
};

export default Header;