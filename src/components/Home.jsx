import React from 'react';
import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          m="auto"
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h='full'
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image 
          src={img5} 
          filter={'hue-rotate(-130deg)'}
          h={['40','400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          > Place to gather and stream animes whenever and wherever you want for free. Users can upload as well as download any anime that they want without any boundation or irritation of watching Ads. Please enjoy. </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Img src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Stream the future of graphics.
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Img src={img2} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future is graphics.
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Img src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on console.
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Img src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Nightlife is cool.
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
