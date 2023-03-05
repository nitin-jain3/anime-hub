import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        top={'4'}
        zIndex={10}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ANIME HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/animes">Animes</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/animes?category=free">Free Animes</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'ghost'}>
                <Link to="/upload">Upload Anime</Link>
              </Button>
            </VStack>
            <HStack
              position={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to='/login'>Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                <Link to='/signup'>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
