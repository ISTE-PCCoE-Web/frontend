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
  bg={'black'}
  color={'white'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '300px' }}
    src={debate}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' marginRight={'1em'} colorScheme='blue'>
        About Event
      </Button>
      <Button variant='solid' colorScheme='blue'>
        Register
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}
