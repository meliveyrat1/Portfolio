import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useState } from 'react';
import portada from './media/fullstack.png';
import skills from './media/skills2.png';
import certific from './media/certificado.png'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState('');

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      
      image:
        portada,
    },
    {
      
      image:
       skills,
    },
    {
      image:
      certific,
    }
  
  ];

  return (
    <Box
      position={'relative'}
      height={'80%'}
      width={['100%', '70%']}
      overflow={'hidden'}
      justifyContent={'center'}
      marginLeft={['0%','15%','19%']}
      marginTop={'-170px'} 
      >
      
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        marginTop={["-33%","-25%","-15%", "0%"]}
        aria-label="left-arrow"
        variant="ghost"
        color="gray"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={1}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
      marginTop={["-33%", "-25%","-15%", "0%"]}
        aria-label="right-arrow"
        variant="ghost"
        color="gray"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={1}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            objectFit={'cover'}
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}