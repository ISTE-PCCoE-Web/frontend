'use client'
import debate from '../../img/Events/Debate.png'

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  background,
} from '@chakra-ui/react'

export default function EventCard() {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW={'800px'}
  marginLeft={'auto'}
  marginRight={'auto'}
  marginBottom={'3em'}
  borderColor={'rgba(255, 255, 255, 0.05)'}
  bg={'rgba(20, 1, 50, 0.05)'}
  color={'white'}
  backdropFilter={'auto'}
  backdropBlur={'4px'}
  bgGradient={'linear(to-br, rgba(155, 100, 155, 0.1), rgba(155, 100, 155, 0.05))'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '300px' }}
    src={debate}
    m = {'1em'}
    borderRadius={'5px'}
    alt='Caffe Latte'
  />

  <Stack >
    <CardBody>
      <Heading 
      size='md'
      fontFamily={'sans-serif'}
      fontWeight={'600'}
      letterSpacing={'1px'}
      >The perfect latte</Heading>

      <Text 
      py='2'
      fontFamily={'sans-serif'}
      fontWeight={'100'}
      letterSpacing={'1px'}
      >
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button 
      variant='outline'
      marginRight={'1em'} 
      colorScheme='purple'
      _hover={{
        background:'rgba(0,0,0,0.2)',
      }}
      >
        About Event
      </Button>
      <Button 
      variant='outline'
      marginRight={'1em'} 
      colorScheme='purple'
      _hover={{
        background:'rgba(0,0,0,0.2)',
      }}
      >
        Register
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}
